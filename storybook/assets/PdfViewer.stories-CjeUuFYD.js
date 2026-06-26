import{R as i,O as M,j as y,M as v}from"./iframe-Bf-sHAx5.js";import{P as D}from"./pdf-viewer-B7JGaIKr.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DeFTrL_D.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-CSFVVsmV.js";import"./index-CPYufUPv.js";import"./PdfViewer-U6UMyuch.js";import"./PdfViewer.module.css-Cl-Luwxn.js";import"./PdfViewerAnnotationLayer-owKDUf2Z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dcc_N9Pk.js";import"./PdfViewerOutlineSidebar-Cl9OJjW4.js";import"./PdfViewerSidebarHeader-Ci6faVLC.js";import"./useBaseUiId-BtnOSHgT.js";import"./useControlled-Dgh6Ve4V.js";import"./CompositeRoot-DJCQ5ZIc.js";import"./CompositeItem-go0BGcIT.js";import"./ToolbarRootContext-CUq4CBDE.js";import"./composite-BJBTp0LG.js";import"./svgIconContainer-D94XRhPf.js";import"./PdfViewerSearchBar-DSJ7sGXp.js";import"./chevron-up-DBZ9btFV.js";import"./chevron-down-B7JXcLji.js";import"./cross-CKUL4fQQ.js";import"./PdfViewerSidebar-3b9FcTPb.js";import"./index-DMzYbXTE.js";import"./index-CBOjLJdB.js";import"./index-CjByY2wF.js";import"./PdfViewerToolbar-B4gpamKA.js";import"./Button-CjmRQsvR.js";import"./chevron-right-Bm-1ngCT.js";import"./Input-ggDyi7pA.js";import"./minus-B1jkT18P.js";import"./search-C6C64LDd.js";import"./spin-DKrAI0HM.js";import"./error-Dce34fJA.js";import"./withOsdkMetrics-CoqdMLh8.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
