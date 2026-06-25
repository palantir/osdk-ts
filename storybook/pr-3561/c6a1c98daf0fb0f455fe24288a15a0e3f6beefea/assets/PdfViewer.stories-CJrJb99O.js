import{R as i,O as M,j as y,M as v}from"./iframe-C5T8ZJmx.js";import{P as D}from"./pdf-viewer-Chq7wEiu.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Dwhz8Rkc.js";import"./preload-helper-B40apXti.js";import"./PdfRenderer-BsU_l1gr.js";import"./index-CkwpQw24.js";import"./PdfViewer-Dtt4jqKK.js";import"./PdfViewer.module.css-CRYlx0Tt.js";import"./PdfViewerAnnotationLayer-BUmvuD5O.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DW4EpEfx.js";import"./PdfViewerOutlineSidebar-IMVJ5JD7.js";import"./PdfViewerSidebarHeader-Di_HQMqj.js";import"./useBaseUiId-BzHNQ0DG.js";import"./useControlled-E4oZ3htf.js";import"./CompositeRoot-B8Aqctic.js";import"./CompositeItem-Rq2w9QJb.js";import"./ToolbarRootContext-fP6aJ7ko.js";import"./composite-BEhgNUjB.js";import"./svgIconContainer-AfL0pezU.js";import"./PdfViewerSearchBar-4JQsmCrE.js";import"./chevron-up-DmmHxNSE.js";import"./chevron-down-C0nr4-Mb.js";import"./cross-rCHPUp3Y.js";import"./PdfViewerSidebar-D6-WzOaa.js";import"./index-BYq2xU2f.js";import"./index-_psxr5R0.js";import"./index-9b9VxlJE.js";import"./PdfViewerToolbar-Blqae1PS.js";import"./Button-ChnENkYF.js";import"./chevron-right-D655U8uR.js";import"./Input-BzXr3RzA.js";import"./minus-Ca57LE1i.js";import"./spin-DOe-AuyF.js";import"./error-B5wRnmSw.js";import"./withOsdkMetrics-CKrvGdLx.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
