import{R as i,O as M,j as y,M as v}from"./iframe-CNeLbKR0.js";import{P as D}from"./pdf-viewer-C6OlWkMm.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BurdIEcc.js";import"./preload-helper-t6i53lZY.js";import"./PdfRenderer-DwRQXWyb.js";import"./index-8cQwkJos.js";import"./PdfViewer-D5Xd5eF4.js";import"./PdfViewer.module.css-XoWOoNfq.js";import"./PdfViewerAnnotationLayer-Cr58abHb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzdEa5UL.js";import"./PdfViewerOutlineSidebar-DygTROxO.js";import"./PdfViewerSidebarHeader-hvVyF5pQ.js";import"./useBaseUiId-DIhe_FS8.js";import"./useControlled-DDWfgMvb.js";import"./CompositeRoot-MlYQT6mb.js";import"./CompositeItem-njWh5NE4.js";import"./ToolbarRootContext-BVIcN7p5.js";import"./composite-C-XAEXGU.js";import"./svgIconContainer-BZaeorZI.js";import"./PdfViewerSearchBar-yJld3qBg.js";import"./chevron-up-CE0gTyip.js";import"./chevron-down-DFSDxaLc.js";import"./cross-CBV_IYC3.js";import"./PdfViewerSidebar-CZXlSpdO.js";import"./index-CI27Aptl.js";import"./index-Ds4ML4jl.js";import"./index-7euDZAsg.js";import"./PdfViewerToolbar-C5sWhxUo.js";import"./Button-Bk9cUjq4.js";import"./chevron-right-KFvwdVkT.js";import"./Input-BgnrhhXf.js";import"./minus-DPOXvMeN.js";import"./search-BHuH4UT5.js";import"./spin-CL8CoGai.js";import"./error-liY-14PA.js";import"./withOsdkMetrics-vMOAMzjU.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
