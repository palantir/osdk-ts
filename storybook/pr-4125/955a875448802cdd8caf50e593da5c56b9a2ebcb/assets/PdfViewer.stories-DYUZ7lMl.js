import{j as r,M as s}from"./iframe-CJUVjq4K.js";import{P as p}from"./pdf-viewer-Din7tRlz.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJbj99D8.js";import"./preload-helper-DSClUnrb.js";import"./PdfViewer-C2MPYYbK.js";import"./index-GE7urbEt.js";import"./BasePdfViewer-DczDogmy.js";import"./BasePdfViewer.module.css-Djh88Y83.js";import"./PdfViewerAnnotationLayer-C1XIXvWE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D6mpjHF3.js";import"./PdfViewerOutlineSidebar-DjXqeG2s.js";import"./PdfViewerSidebarHeader-d6lwOqc6.js";import"./useBaseUiId-CYXUYH1v.js";import"./useControlled-CmmcI5hz.js";import"./CompositeRoot-B95obCZE.js";import"./CompositeItem-Dt49eISw.js";import"./ToolbarRootContext-BC2o7QKp.js";import"./composite-DKgrSWPF.js";import"./svgIconContainer-CvZRP5Wc.js";import"./PdfViewerSearchBar-B0cFs8jH.js";import"./chevron-up-DIECRHXw.js";import"./chevron-down-CQOxC3pu.js";import"./cross-B9ZydxGz.js";import"./PdfViewerSidebar-C2yIo1Of.js";import"./index-CnwddG-W.js";import"./index-Cy6fVwoK.js";import"./index-Bf3fiI44.js";import"./PdfViewerToolbar-D9pksLbo.js";import"./Button-3MSado4D.js";import"./chevron-right-D7MP9Fw0.js";import"./Input-CRzIer8e.js";import"./search-DE0VchUk.js";import"./spin-BItLeY2H.js";import"./error-Qoo-TgP1.js";import"./withOsdkMetrics-_5PcUp3d.js";import"./makeExternalStore-X814geH6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
