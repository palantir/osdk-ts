import{R as i,O as M,j as y,M as v}from"./iframe-DzqL76g_.js";import{P as D}from"./pdf-viewer-B_TEgYVa.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-C-OCQZvs.js";import"./preload-helper-DmG9dd1J.js";import"./PdfRenderer-DmOcvCQN.js";import"./index-C7_zXXHU.js";import"./PdfViewer-OGTrZjsc.js";import"./PdfViewer.module.css-C5M-b_Gm.js";import"./PdfViewerAnnotationLayer-D_UJgUAu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_Yucy1b.js";import"./PdfViewerOutlineSidebar-frbkoqJN.js";import"./PdfViewerSidebarHeader-bMdvHTk9.js";import"./useBaseUiId-BMxeAaRK.js";import"./useControlled-CL8CCR_w.js";import"./CompositeRoot-DkbTukIU.js";import"./CompositeItem-Bg5Dmo8o.js";import"./ToolbarRootContext-Bk0YX5FX.js";import"./composite-ZwiEyvb2.js";import"./svgIconContainer-C4c3U1tJ.js";import"./PdfViewerSearchBar-2Remab0X.js";import"./chevron-up-xmgZvk6c.js";import"./chevron-down-Bi_yQRGc.js";import"./cross-JNlRAt1Y.js";import"./PdfViewerSidebar-BzX8lGu-.js";import"./index-CwKZ4F6H.js";import"./index-DrZY_AQx.js";import"./index-MULyq74S.js";import"./PdfViewerToolbar-9k6vMaHD.js";import"./Button-DchrC9Fa.js";import"./chevron-right-DNsKSjT9.js";import"./Input-BLrL7N-3.js";import"./minus-BDz0q1GT.js";import"./search-o3G2SKWf.js";import"./spin-d1m37MKw.js";import"./error-58l_8lT3.js";import"./withOsdkMetrics-Cb699rWq.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
