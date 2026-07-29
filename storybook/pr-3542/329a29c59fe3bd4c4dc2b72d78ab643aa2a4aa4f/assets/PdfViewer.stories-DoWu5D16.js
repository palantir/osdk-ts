import{R as i,O as M,j as y,M as v}from"./iframe-nueKWeNk.js";import{P as D}from"./pdf-viewer-7J4G-yIU.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BGqn9pCa.js";import"./preload-helper-CPrmn3Vx.js";import"./PdfRenderer-Bju2HFeO.js";import"./index-8zQ28Zsf.js";import"./PdfViewer-C1lmb4S5.js";import"./PdfViewer.module.css-DMHz82tS.js";import"./PdfViewerAnnotationLayer-BZl-QzTJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxllGlo4.js";import"./PdfViewerOutlineSidebar-m8x5MpIm.js";import"./PdfViewerSidebarHeader-r9Xx3ZdR.js";import"./useBaseUiId-O_S2vgR1.js";import"./useControlled-C7jYZiWT.js";import"./CompositeRoot-Bbjn7Y7C.js";import"./CompositeItem-bAw2hUcy.js";import"./ToolbarRootContext-Dh4ogsJV.js";import"./composite-D_7UegR7.js";import"./svgIconContainer-CFbBDdQj.js";import"./PdfViewerSearchBar-BiykNX5h.js";import"./chevron-up-Beeest_1.js";import"./chevron-down-BSLP6rS7.js";import"./cross-DQ6b64Le.js";import"./PdfViewerSidebar-DHTAM3YA.js";import"./index-DNqSTEH1.js";import"./index-2dE35M2O.js";import"./index-Bh14ilbo.js";import"./PdfViewerToolbar-CqQsxvpt.js";import"./Button-JkfxhLDY.js";import"./chevron-right-CRksiCv-.js";import"./Input-CILTC0Ip.js";import"./minus-CEe7T5Cl.js";import"./spin-CTOgo3Ug.js";import"./error-DbUviyRr.js";import"./withOsdkMetrics-wEMl8EJm.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
