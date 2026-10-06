import{j as r,M as s}from"./iframe-BJzSfC9S.js";import{P as p}from"./pdf-viewer-C2a4bUkO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C49i9VQd.js";import"./preload-helper-C5ZXn0m1.js";import"./PdfViewer-BoCr2sMa.js";import"./index-RBTsKrCd.js";import"./BasePdfViewer-DP-p-oPu.js";import"./BasePdfViewer.module.css-BsZXsaiZ.js";import"./PdfViewerAnnotationLayer-DHi2IZxN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCA9ine8.js";import"./PdfViewerOutlineSidebar-CDht62O5.js";import"./PdfViewerSidebarHeader-D9Dbx21S.js";import"./useBaseUiId-xJC8-ZJA.js";import"./useControlled-CHkHsIux.js";import"./CompositeRoot-Cd9Omqiy.js";import"./CompositeItem-Dy9HP9ud.js";import"./ToolbarRootContext-BYj16EhM.js";import"./composite-CJkKobo9.js";import"./svgIconContainer-CuAg_aag.js";import"./PdfViewerSearchBar-B7WeQQzI.js";import"./chevron-up-nezg5COO.js";import"./chevron-down-i7BRJyaV.js";import"./cross-C1sOYIrW.js";import"./PdfViewerSidebar-DGvJyCNJ.js";import"./index-C7z7F6oT.js";import"./index-XpV3If0y.js";import"./index-BJ-crEmJ.js";import"./PdfViewerToolbar-BsfI_01N.js";import"./Button-VqVSA-sW.js";import"./chevron-right-H7UCt0X4.js";import"./Input-DtZovt6p.js";import"./search-BtII_V1C.js";import"./spin-R6EQ7AUo.js";import"./error-B8K_QQqb.js";import"./withOsdkMetrics-Dv0OE5bl.js";import"./makeExternalStore-BYmjIu_q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
