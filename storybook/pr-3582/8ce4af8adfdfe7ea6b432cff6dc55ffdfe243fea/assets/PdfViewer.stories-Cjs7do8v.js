import{R as i,O as M,j as y,M as v}from"./iframe-Dby7K8X-.js";import{P as D}from"./pdf-viewer-_mQhdf5W.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CO5qnO7a.js";import"./preload-helper-DbMpngWi.js";import"./PdfRenderer-D1BsOjti.js";import"./index-CqHAgdon.js";import"./PdfViewer-DMZtUWzX.js";import"./PdfViewer.module.css-CE_JDQ2d.js";import"./PdfViewerAnnotationLayer-kieDvYHP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CdP-ESo4.js";import"./PdfViewerOutlineSidebar-C8CVocdW.js";import"./PdfViewerSidebarHeader-DeEz9L0H.js";import"./useBaseUiId-BEmZSLoT.js";import"./useControlled-CipfzQZw.js";import"./CompositeRoot-pjWS9naf.js";import"./CompositeItem-C0MPwWG2.js";import"./ToolbarRootContext-Bv8DhEHE.js";import"./composite-DtQqu1F7.js";import"./svgIconContainer-mB2sMyBx.js";import"./PdfViewerSearchBar-BeY4YJjg.js";import"./chevron-up-CLc7LTbo.js";import"./chevron-down-CNOZ50il.js";import"./cross-BGzDdiNr.js";import"./PdfViewerSidebar-DY-OGZ_p.js";import"./index-CIlU0z6B.js";import"./index-2fRHQ96v.js";import"./index-Dl7mMc_z.js";import"./PdfViewerToolbar-CZ6Gr_Ly.js";import"./Button-E6BV5PDL.js";import"./chevron-right-Dc5eHGeY.js";import"./Input-fNfkosC1.js";import"./minus-BC5YD5Yl.js";import"./search-Nog7PiWw.js";import"./spin-DY7Cp07b.js";import"./error-B0De8d-K.js";import"./withOsdkMetrics-D_qlVUfT.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
