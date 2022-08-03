puts "🌱 Seeding spices..."

images =   [ 'https://www.helpguide.org/wp-content/uploads/woman-exercising-on-yoga-mat.jpg','https://imageio.forbes.com/specials-images/dam/imageserve/1130300334/960x0.jpg?height=474&width=711&fit=bounds', 'https://angletoner.com/wp-content/uploads/2019/09/5-Reasons-Why-Exercise-is-Important-edits.jpg', 'https://onecms-res.cloudinary.com/image/upload/s--1glYCO-K--/c_crop,h_1191,w_2119,x_1,y_114/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/cna/image/2022/05/18/running_exercise.jpg?itok=FC1K927e', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/19/18/idoh-exercise.jpg?width=1200','https://apicms.thestar.com.my/uploads/images/2021/05/28/1163815.jpg', 'https://th-thumbnailer.cdn-si-edu.com/t_brNW6zVy6o2DHXRFVLOlAdJfg=/1000x750/filters:no_upscale():focal(800x602:801x603)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/1f/9a/1f9acb47-7f4e-499a-854c-1a93e355130f/gettyimages-861458264_web.jpg', 'https://cdn.mos.cms.futurecdn.net/vpqgCoc3YDVR5qTXdvCFGE.jpg', 'https://images.newscientist.com/wp-content/uploads/2022/05/04153108/SEI_102164921.jpg', 'https://static01.nyt.com/images/2022/04/12/well/06sci-physed-30min/06sci-physed-30min-videoSixteenByNine3000.jpg', 'https://www.eehealth.org/-/media/images/modules/blog/posts/2018/7/cardio-workout.jpg', 'https://www.cnet.com/a/img/resize/1db76915a76f6faee07ea465fc4b7de4e39071e5/2020/04/16/f7af9e57-0057-44e7-9d34-9509b21d4a77/gettyimages-1173158618.jpg?auto=webp&width=1200', 'https://www.muscleandfitness.com/wp-content/uploads/2018/11/Group-Fitness-Class-Performing-A-Variety-Of-Exercises-1.jpg?quality=86&strip=all', 'https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/sleep/group-kettlebell-exercise-hero.ashx?h=500&iar=0&mh=500&mw=1300&w=1297&hash=36BA2E9F7D2A862EC1605EC91265688D' ]
50.times do
User.create(Faker::Internet.user('username', 'email', 'password'))

end

Workout.create(start_date: Date.parse("2022/1/1"), end_date: Date.parse("2022/1/1"), user_id: User.all.sample.id)
Workout.create(start_date: Date.parse("2022/1/2"), end_date: Date.parse("2022/1/2"), user_id: User.all.sample.id)
Workout.create(start_date: Date.parse("2022/1/3"), end_date: Date.parse("2022/1/3"),  user_id: User.all.sample.id)

Exercise.create( total_time: 1, name: ["run"], title: "Aerobic exercise", workout_id: Workout.all.sample.id)
Exercise.create( total_time: 2,  name: ["push-ups"], title: "Anaerobic exercise",  workout_id: Workout.all.sample.id)
Exercise.create(total_time: 3,  name: ["yoga"], title: "Flexibility exercise",  workout_id: Workout.all.sample.id)
Exercise.create(total_time: 4,  name: ["yoga", "run"], title: "Flexibility exercise",  workout_id: Workout.all.sample.id)

50.times do
Friend.create(user_id: User.all.sample.id, name: Faker::Name.name)
end
20.times do
Comment.create(text: Faker::Emotion.adjective,  user_id: User.all.sample.id)
end

13.times do
Post.create(text: Faker::Verb.base, likes: rand(1..15), unlikes: rand(1..15),user_id: User.all.sample.id, img_url: images.sample)
end

PostComment.create(comment_id: Comment.all.sample.id, post_id: Post.all.sample.id)

puts "✅ Done seeding!"