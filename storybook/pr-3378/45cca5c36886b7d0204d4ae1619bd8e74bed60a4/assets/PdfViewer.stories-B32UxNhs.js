import{R as i,O as M,j as y,M as v}from"./iframe-CrtKjtEH.js";import{P as D}from"./pdf-viewer-CwOqWXXB.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-tacfjPhd.js";import"./preload-helper-SSahoAr9.js";import"./PdfRenderer-DQ0ecp64.js";import"./index-BwQBel0j.js";import"./PdfViewer-pXRQ0cx6.js";import"./PdfViewer.module.css-BFz7f9xk.js";import"./PdfViewerAnnotationLayer-DZN8xwHB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-k2Xx8hGL.js";import"./PdfViewerOutlineSidebar-BJL8yvi2.js";import"./PdfViewerSidebarHeader-DOr9vcIM.js";import"./useBaseUiId-DFsa-aX3.js";import"./useControlled-DFzHzZIl.js";import"./CompositeRoot-B4tDiZfc.js";import"./CompositeItem-D3qD8JcI.js";import"./ToolbarRootContext-Bk2PwjRD.js";import"./composite-us4_F480.js";import"./svgIconContainer-Dh3sUjjs.js";import"./PdfViewerSearchBar-Ihzg8LTw.js";import"./chevron-up-DNyuN3LI.js";import"./chevron-down-DxQEXQwy.js";import"./cross-Cz8Bb3_T.js";import"./PdfViewerSidebar-DY7sQpaz.js";import"./index-BwhAMRUz.js";import"./index-Cq2x_ofO.js";import"./index-Sa5B4YvM.js";import"./PdfViewerToolbar-UIBdDGqN.js";import"./Button-H44IxOh8.js";import"./chevron-right-I0dYeQJe.js";import"./Input-hNZs0cNG.js";import"./minus-DUkZ9BHe.js";import"./search-CKBv43nH.js";import"./spin-OJN2SCvr.js";import"./error-DqXHGA21.js";import"./withOsdkMetrics-BZ-XFVYd.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
