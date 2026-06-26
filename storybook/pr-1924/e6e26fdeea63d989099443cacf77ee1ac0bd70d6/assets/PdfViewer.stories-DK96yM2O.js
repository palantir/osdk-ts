import{R as i,O as M,j as y,M as v}from"./iframe-Bigw6z9E.js";import{P as D}from"./pdf-viewer-BaywmGKH.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-oFsjJFEB.js";import"./preload-helper-DqZ4XMTG.js";import"./PdfRenderer-Cb6x0oP2.js";import"./index-Bwh7XEh_.js";import"./PdfViewer-Cl-6R8Sq.js";import"./PdfViewer.module.css-B3TV3ujc.js";import"./PdfViewerAnnotationLayer-CFz-Kr7-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CW_zpje2.js";import"./PdfViewerOutlineSidebar-DCIIwzb1.js";import"./PdfViewerSidebarHeader-DHuUobiv.js";import"./useBaseUiId-BwzTegPX.js";import"./useControlled-DjLfmPXv.js";import"./CompositeRoot-BYecm7Mq.js";import"./CompositeItem-4dQRD2HU.js";import"./ToolbarRootContext-T02FlUL_.js";import"./composite-DaJz0CaH.js";import"./svgIconContainer-DxMm7hM2.js";import"./PdfViewerSearchBar-9azhaP-V.js";import"./chevron-up-cEwCwQhL.js";import"./chevron-down-DDOgzvpc.js";import"./cross-CMV8OFRa.js";import"./PdfViewerSidebar-Bu5yaagO.js";import"./index-DQlD6a1l.js";import"./index-D7kNUBdI.js";import"./index-B3KIyxX6.js";import"./PdfViewerToolbar-DZ041yzw.js";import"./Button-DvMvc1bH.js";import"./chevron-right-27QQVM7A.js";import"./Input-DlHqY6Bk.js";import"./minus-D8cj3sbs.js";import"./search-_nztYN-c.js";import"./spin-sPAQmBkL.js";import"./error-DyDq47Qx.js";import"./withOsdkMetrics-BArOiklZ.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
