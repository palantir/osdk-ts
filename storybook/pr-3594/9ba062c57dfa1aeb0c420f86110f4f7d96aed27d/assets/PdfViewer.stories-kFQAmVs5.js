import{R as i,O as M,j as y,M as v}from"./iframe-DDx_hlPk.js";import{P as D}from"./pdf-viewer-CVUux0on.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-SLV7h6Du.js";import"./preload-helper-CQ52MQVW.js";import"./PdfRenderer-Bhtbv6nC.js";import"./index-B4s0gChR.js";import"./PdfViewer-5mR3Hf73.js";import"./PdfViewer.module.css-DVmsHyD0.js";import"./PdfViewerAnnotationLayer-Kp6fOiNb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BnaT5Zp5.js";import"./PdfViewerOutlineSidebar-Ccj1PlMC.js";import"./PdfViewerSidebarHeader-lJ4wUUsg.js";import"./useBaseUiId-CduWqZHU.js";import"./useControlled-BwjRINvz.js";import"./CompositeRoot-Q6OVBBHo.js";import"./CompositeItem-B5AEHnd_.js";import"./ToolbarRootContext-DWG9U5Or.js";import"./composite-DgQBI1ty.js";import"./svgIconContainer-BGQv8xjx.js";import"./PdfViewerSearchBar-DZMNSC6J.js";import"./chevron-up-qRAdUHWB.js";import"./chevron-down-DpqAF9h-.js";import"./cross-DpfFZzYJ.js";import"./PdfViewerSidebar-D9WnHw74.js";import"./index-CaGRleJC.js";import"./index-DMxbBDvp.js";import"./index-DYSMImXi.js";import"./PdfViewerToolbar-CpaY8v-u.js";import"./Button-O007gZS-.js";import"./chevron-right-D8gjpbK_.js";import"./Input-D7efLwrT.js";import"./minus-Ctt9PYTw.js";import"./search-B7xA9GeZ.js";import"./spin-HLuzE_Wz.js";import"./error-C9a23hTL.js";import"./withOsdkMetrics-D01IaqkZ.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
