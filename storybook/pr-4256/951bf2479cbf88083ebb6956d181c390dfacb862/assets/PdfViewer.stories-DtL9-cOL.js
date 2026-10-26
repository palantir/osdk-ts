import{j as r,M as s}from"./iframe-BBSo5ZCd.js";import{P as p}from"./pdf-viewer-Cfu_itdY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BIJfOJp7.js";import"./preload-helper-Dzi5mX41.js";import"./PdfViewer-CUAPQmzA.js";import"./index-B8ZS8eSl.js";import"./BasePdfViewer-Cz1PQCHV.js";import"./BasePdfViewer.module.css-LjBECPea.js";import"./PdfViewerAnnotationLayer-eIMdfoop.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiEDtM7l.js";import"./PdfViewerOutlineSidebar-D_8Y4DA2.js";import"./PdfViewerSidebarHeader-BbsSTwx8.js";import"./useBaseUiId-OTe5-im2.js";import"./useControlled-B7b0Wh0w.js";import"./CompositeRoot-D5kUl1oZ.js";import"./CompositeItem-Bl0A6RCo.js";import"./ToolbarRootContext-CROAvwzr.js";import"./composite-B78RY0fg.js";import"./svgIconContainer-BoEF3o2r.js";import"./PdfViewerSearchBar-D2Dn5SoX.js";import"./chevron-up-DlRdhiP2.js";import"./chevron-down-CTZm-1e2.js";import"./cross-CS1ZE-4d.js";import"./PdfViewerSidebar-CFVS6O-y.js";import"./index-DKyvBMeQ.js";import"./index-B2iIKgXF.js";import"./index-BBPJ8Eu5.js";import"./PdfViewerToolbar-Ce4HTg39.js";import"./Button-Dlb0le5d.js";import"./chevron-right-Ch8Vw3La.js";import"./Input-CdlLpAfh.js";import"./search-D9IvXS9T.js";import"./spin-Cn8thchy.js";import"./error-DlnosDW0.js";import"./withOsdkMetrics-_cs1V2V6.js";import"./makeExternalStore-CncG39Al.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
