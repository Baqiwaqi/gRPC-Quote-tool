# FROM envoyproxy/envoy:v1.22.0

# COPY ./envoy.yaml /etc/envoy/envoy.yaml

# ENTRYPOINT [ "/usr/local/bin/envoy" ]
# CMD [ "-c /etc/envoy/envoy.yaml", "-l trace", "--log-path /tmp/envoy_info.log" ]
#  --platform=linux/amd64
FROM envoyproxy/envoy:v1.22.0 
# FROM envoyproxy/envoy-dev:latest 
COPY ./envoy.yaml /etc/envoy/envoy.yaml
# ENTRYPOINT [ "/usr/local/bin/envoy" ]
# CMD [ "-c /etc/envoy/envoy.yaml", "-l trace", "--log-path /tmp/envoy_info.log" ]




# COPY ./envoy.yaml /etc/envoy/envoy.yaml

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log