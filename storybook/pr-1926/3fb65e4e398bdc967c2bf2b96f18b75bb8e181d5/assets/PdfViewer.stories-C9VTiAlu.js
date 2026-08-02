import{j as r,M as s}from"./iframe-DytthAgf.js";import{P as p}from"./pdf-viewer-tom-1uoV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHO9Y5Ni.js";import"./preload-helper-C_4BNbTz.js";import"./PdfRenderer-Cradmw4O.js";import"./index-D3tIM5sk.js";import"./PdfViewer-UoOHQIMJ.js";import"./PdfViewer.module.css-KiOOs_1W.js";import"./PdfViewerAnnotationLayer-gdxkcb0u.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BrIdOJoJ.js";import"./PdfViewerOutlineSidebar-Boymu6im.js";import"./PdfViewerSidebarHeader-YJHl0_sO.js";import"./useBaseUiId-Dkek2wV5.js";import"./useControlled-BiVwljs8.js";import"./CompositeRoot-BR5vEH4u.js";import"./CompositeItem-C2b15spo.js";import"./ToolbarRootContext-Tt4yBAJp.js";import"./composite-BtiuVRIQ.js";import"./svgIconContainer-B3UGUQMc.js";import"./PdfViewerSearchBar-Du7XyIge.js";import"./chevron-up-uwX0Z-gU.js";import"./chevron-down-D-EU7ysh.js";import"./cross-BAoo9bRB.js";import"./PdfViewerSidebar-Dq2xrAe4.js";import"./index-Dufg7QH_.js";import"./index-BoY2zDED.js";import"./index-lj4n_gzr.js";import"./PdfViewerToolbar-CsA-xeCe.js";import"./Button-COGmdSd7.js";import"./chevron-right-f85rDcRr.js";import"./Input-Dmrm85gF.js";import"./search-DxqwfofF.js";import"./spin-CSHHdCgU.js";import"./error-C8qY1hME.js";import"./withOsdkMetrics-Car_C0r4.js";import"./makeExternalStore-B--gn_oA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
