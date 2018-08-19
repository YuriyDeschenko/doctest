
echo "Run docTest"

# сборка имиджа
docker build -t doctest3 .
# запуск имиджа
docker run -i -t --name doc-test3 -p80:8080 -v /home/yuriy/wf/docTest/var:/var doctest3

