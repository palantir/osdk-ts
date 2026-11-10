import{j as r,M as s}from"./iframe-50Cg_Ain.js";import{P as p}from"./pdf-viewer-Ul8FmrGH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BVq7I3H5.js";import"./preload-helper-DMtB3Ytn.js";import"./PdfViewer-BaQV5iSb.js";import"./index-jwJr-CWL.js";import"./BasePdfViewer--ceYqhIi.js";import"./BasePdfViewer.module.css-DYtbaKil.js";import"./PdfViewerAnnotationLayer-CilRipsv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B54fsX0Z.js";import"./PdfViewerOutlineSidebar-CHquttvw.js";import"./PdfViewerSidebarHeader-Dvwo9cMY.js";import"./useBaseUiId-KVfK4IPD.js";import"./useControlled-BYCjMK_X.js";import"./CompositeRoot-Bl3_60xC.js";import"./CompositeItem-PSBD5_9a.js";import"./ToolbarRootContext-wGzcHK2n.js";import"./composite-Dp3rlZDO.js";import"./svgIconContainer-CcJ3Jv7r.js";import"./PdfViewerSearchBar-MWeqg6EO.js";import"./chevron-up-BFPpy4NF.js";import"./chevron-down-XrKrb8VS.js";import"./cross-COS10AaY.js";import"./PdfViewerSidebar-4o71YwbV.js";import"./index-CKYD_SOl.js";import"./index-pDWKxWtb.js";import"./index-Bnqsnheo.js";import"./PdfViewerToolbar-9sx-gMZL.js";import"./Button-D1Gjjj1e.js";import"./chevron-right-5oaC5UOk.js";import"./Input-MpATsBua.js";import"./search-BrkmnBZA.js";import"./spin-MUKH5j_v.js";import"./error-COSlANXI.js";import"./withOsdkMetrics-DCjsjr3q.js";import"./makeExternalStore-mw5x5KPf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
