import{R as i,O as M,j as y,M as v}from"./iframe-BiaK4n54.js";import{P as D}from"./pdf-viewer-BVfUd042.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-8ty7R3l4.js";import"./preload-helper-CU06Hx_H.js";import"./PdfRenderer-BlxO1lcM.js";import"./index-D3adZ3g-.js";import"./PdfViewer-BsgqL-_s.js";import"./PdfViewer.module.css-DU-MrPxB.js";import"./PdfViewerAnnotationLayer-jwXPmuos.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfME7Qvv.js";import"./PdfViewerOutlineSidebar-D4KQvpE_.js";import"./PdfViewerSidebarHeader-Cy1gaK1B.js";import"./useBaseUiId-DYUuNT23.js";import"./useControlled-Boq-hwJu.js";import"./CompositeRoot-DujKOlG3.js";import"./CompositeItem-Cu5i8zaW.js";import"./ToolbarRootContext-Clf1l3G4.js";import"./composite-CGE7SHh3.js";import"./svgIconContainer-CyEWxphT.js";import"./PdfViewerSearchBar-CW2au-kI.js";import"./chevron-up-BraPeHFX.js";import"./chevron-down-CSTS4xkp.js";import"./cross-MQP2DxLM.js";import"./PdfViewerSidebar-sjuDZBvK.js";import"./index-BsH4YHDs.js";import"./index-C36q6vv9.js";import"./index-C7L2FoPM.js";import"./PdfViewerToolbar-BWN332HN.js";import"./Button-PaRuc5oI.js";import"./chevron-right-Ds_0HT6k.js";import"./Input-BmmbP7Xg.js";import"./minus-CE475K11.js";import"./search-Di6IYbI8.js";import"./spin-yklDyT_6.js";import"./error-BUTFbX5Q.js";import"./withOsdkMetrics-BtCKf7d8.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
