import{R as i,O as M,j as y,M as v}from"./iframe-jOwwVEWr.js";import{P as D}from"./pdf-viewer-Dy6NcZrk.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-C6paOGwF.js";import"./preload-helper-B9i57n-G.js";import"./PdfRenderer-D5v17RaY.js";import"./index-Bu24czZf.js";import"./PdfViewer-BABCRbT3.js";import"./PdfViewer.module.css-Ci7nB5FV.js";import"./PdfViewerAnnotationLayer-BIUYn0LG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BC4tAaot.js";import"./PdfViewerOutlineSidebar-xvbz_Med.js";import"./PdfViewerSidebarHeader-DO9TT_Va.js";import"./useBaseUiId-onvOQAvM.js";import"./useControlled-DHRHy43-.js";import"./CompositeRoot-DHIN5YlR.js";import"./CompositeItem-CoO4Y5UD.js";import"./ToolbarRootContext-Cvugleb3.js";import"./composite-BPMBoWPm.js";import"./svgIconContainer-S3HNfdB4.js";import"./PdfViewerSearchBar-CbR2FenZ.js";import"./chevron-up-DQZxbhan.js";import"./chevron-down-B6WLsc6y.js";import"./cross-D9Epjovl.js";import"./PdfViewerSidebar-CvDu27Ab.js";import"./index-D7F5Sg6i.js";import"./index-DF7eXmQI.js";import"./index-M99VwHgE.js";import"./PdfViewerToolbar-BMYZIyfa.js";import"./Button-BOn0G2Sg.js";import"./chevron-right-DfWfhCNS.js";import"./Input-DhshGsOS.js";import"./minus-BQiZVDrz.js";import"./search-CmVz_bOS.js";import"./spin-BqtNJHp4.js";import"./error-DE3RZGJL.js";import"./withOsdkMetrics-DBCX48G-.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,fe as default};
