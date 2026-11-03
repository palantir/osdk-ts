import{j as r,M as s}from"./iframe-B1KRdkhO.js";import{P as p}from"./pdf-viewer-BVNZzX4g.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-x8mWUctP.js";import"./preload-helper-Bnxkxvgo.js";import"./PdfViewer-BzRz4eXO.js";import"./index-BSlreuwL.js";import"./BasePdfViewer-CeFxfSEO.js";import"./BasePdfViewer.module.css-BbFwahqn.js";import"./PdfViewerAnnotationLayer-EsPw_hd_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dthd3FKI.js";import"./PdfViewerOutlineSidebar-DjKYHpGl.js";import"./PdfViewerSidebarHeader-BOe3Ie90.js";import"./useBaseUiId-Cr74IIpt.js";import"./useControlled-CLV8A8ub.js";import"./CompositeRoot-nDtRVmwJ.js";import"./CompositeItem-Bkqt9gor.js";import"./ToolbarRootContext-Bfq07vZg.js";import"./composite-JDw4eSYM.js";import"./svgIconContainer-B6SQl79i.js";import"./PdfViewerSearchBar-D25X3ExM.js";import"./chevron-up-mv0eRtgQ.js";import"./chevron-down-CnakN8OV.js";import"./cross-I1O1eUVR.js";import"./PdfViewerSidebar-DKL1NvYs.js";import"./index-BdAFUNX5.js";import"./index-bzttAU4r.js";import"./index-DTJULArL.js";import"./PdfViewerToolbar-Dx1xWrQK.js";import"./Button-D76Gdss_.js";import"./chevron-right-D5hMHWy-.js";import"./Input-B2oruy_a.js";import"./search-C904-bBJ.js";import"./spin-DQx702zo.js";import"./error-DulRH5vX.js";import"./withOsdkMetrics-BnkJio_O.js";import"./makeExternalStore-YXTpwul9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
