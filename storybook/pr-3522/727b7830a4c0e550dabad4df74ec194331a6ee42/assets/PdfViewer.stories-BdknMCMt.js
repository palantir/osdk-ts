import{R as i,O as M,j as y,M as v}from"./iframe-UO4Ybkw7.js";import{P as D}from"./pdf-viewer-DbQm2EKj.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BJTOYz4i.js";import"./preload-helper-DiJvXCUK.js";import"./PdfRenderer-B3VRYV6S.js";import"./index-Bb5mjG_a.js";import"./PdfViewer-SUMh5xyL.js";import"./PdfViewer.module.css-Dm6XpdFM.js";import"./PdfViewerAnnotationLayer-C_JXlf0L.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bw5k4_zI.js";import"./PdfViewerOutlineSidebar-C0XnJEvw.js";import"./PdfViewerSidebarHeader-BrHJ9L7m.js";import"./useBaseUiId-_4TB_TLw.js";import"./useControlled-CR06vBJn.js";import"./CompositeRoot-CCXSiPvf.js";import"./CompositeItem-61FeIbyL.js";import"./ToolbarRootContext-bbK7gci1.js";import"./composite-KS3-JNxL.js";import"./svgIconContainer-B_raw7t4.js";import"./PdfViewerSearchBar-AhQfFcER.js";import"./chevron-up-CYUnZxuf.js";import"./chevron-down-CEdjdYlD.js";import"./cross-BCTqA8Jr.js";import"./PdfViewerSidebar--LdpQNvy.js";import"./index-CVIKVHhv.js";import"./index-Bvhr_DAd.js";import"./index-DKFo-HpT.js";import"./PdfViewerToolbar-DNXsw1-h.js";import"./Button-kE2g4U-0.js";import"./chevron-right-BSmf3gxU.js";import"./Input-CEw-t_4F.js";import"./minus-XZ5ilPR8.js";import"./search-B4rNT_0W.js";import"./spin-DBC6E92I.js";import"./error-D7LxK_a3.js";import"./withOsdkMetrics-pAjbcXOm.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
