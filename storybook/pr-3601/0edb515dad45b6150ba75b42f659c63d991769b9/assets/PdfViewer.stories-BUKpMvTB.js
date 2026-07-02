import{R as i,O as M,j as y,M as v}from"./iframe-g5gKY9_O.js";import{P as D}from"./pdf-viewer-CyHGvuH7.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-_BB3nsXJ.js";import"./preload-helper-vD_ADXE0.js";import"./PdfRenderer-B_TSeqtL.js";import"./index-C40rUIxn.js";import"./PdfViewer-JVxk4VRU.js";import"./PdfViewer.module.css-BhJfSfXa.js";import"./PdfViewerAnnotationLayer-2CTyGG3Z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DWCYlHmx.js";import"./PdfViewerOutlineSidebar-6mPLuHDK.js";import"./PdfViewerSidebarHeader-DIM-Fbc6.js";import"./useBaseUiId-Cu9W3twr.js";import"./useControlled-C8OguibT.js";import"./CompositeRoot-B1ejQ-ih.js";import"./useCompositeListItem-BfgEgn4l.js";import"./ToolbarRootContext-BGBMNAEP.js";import"./composite-Du8KNnA7.js";import"./CompositeItem-B8ZcJXf0.js";import"./svgIconContainer-CCJJt3RP.js";import"./PdfViewerSearchBar-8ND_6_11.js";import"./chevron-up-5D4SukCg.js";import"./chevron-down-CJwzE1wb.js";import"./cross-D1KqNeKH.js";import"./PdfViewerSidebar-N5SJWrk3.js";import"./index-BdFO9CbL.js";import"./index-CvH9dz38.js";import"./index-DJ73cS3V.js";import"./PdfViewerToolbar-BJtCtNtF.js";import"./Button-BmSo5q-L.js";import"./chevron-right-DHURC2gx.js";import"./Input-mkx3L3Pg.js";import"./minus-DdlsLNy9.js";import"./spin-DKPrG8p2.js";import"./error-6eOYL3Dm.js";import"./withOsdkMetrics-DHCx2HxD.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
