import{j as r,M as s}from"./iframe-DYHiAth1.js";import{P as p}from"./pdf-viewer-Ch97EU9E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-1FakreXI.js";import"./preload-helper-BP3stq1X.js";import"./PdfViewer-_h0U4x9f.js";import"./index-CFqT-tg2.js";import"./BasePdfViewer-DpNi0WEl.js";import"./BasePdfViewer.module.css-9ZPluKoV.js";import"./PdfViewerAnnotationLayer-B7fTxiT8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDbgSTGd.js";import"./PdfViewerOutlineSidebar-CELhiyFF.js";import"./PdfViewerSidebarHeader-YWeKic2K.js";import"./useBaseUiId-D0-MqLY3.js";import"./useControlled-CC9eDEXu.js";import"./CompositeRoot-C5xBv3xn.js";import"./CompositeItem-BzTzzhBW.js";import"./ToolbarRootContext-DKtHKjj0.js";import"./composite-rM29Crwf.js";import"./svgIconContainer-CpmCT8qJ.js";import"./PdfViewerSearchBar-CDMOi_9B.js";import"./chevron-up-6g8VD7sc.js";import"./chevron-down-CN-or4pg.js";import"./cross-NVvu5W38.js";import"./PdfViewerSidebar-CTrp55eD.js";import"./index-Cw0Wnr-O.js";import"./index-CkiCmIU-.js";import"./index-BwwRvQBw.js";import"./PdfViewerToolbar-DGDPWoRN.js";import"./Button-BEfeLVww.js";import"./chevron-right-DHGTAgl-.js";import"./Input-_kt7fmI_.js";import"./search-CQsEHw2u.js";import"./spin-CcB8lRLP.js";import"./error-5z49WPo0.js";import"./withOsdkMetrics-0_t_tujb.js";import"./makeExternalStore-QtZrVkJy.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
