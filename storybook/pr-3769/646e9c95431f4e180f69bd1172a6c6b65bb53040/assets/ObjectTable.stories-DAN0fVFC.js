import{j as i}from"./iframe-Dz1VB-Ug.js";import{O as p}from"./object-table-BaVt1PJE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DSvWzJ-a.js";import"./preload-helper-cJTn69LB.js";import"./Table-CDep-vX1.js";import"./index-DpMaRJGq.js";import"./Dialog-BSe_V3kU.js";import"./cross-BHVqJpxe.js";import"./svgIconContainer-D2McpvpD.js";import"./useBaseUiId-DBeQxEGH.js";import"./InternalBackdrop-DFd25Tom.js";import"./composite-DFM5sFvF.js";import"./index-BrZlGDbg.js";import"./index-B09TTsrW.js";import"./index-CBxyclgJ.js";import"./useEventCallback-Co8DaEHE.js";import"./SkeletonBar-D5gnK4Nn.js";import"./LoadingCell-DTNteS0e.js";import"./ColumnConfigDialog-Du9Krsdc.js";import"./DraggableList-Bcfu7StV.js";import"./search-CkZGsmzb.js";import"./Input-BVvBS9l5.js";import"./useControlled-qV-s3roQ.js";import"./Button-CXoONGN_.js";import"./small-cross-ZF88MpRa.js";import"./ActionButton-BvfsH6QL.js";import"./Checkbox-C38CRGr-.js";import"./useValueChanged-C5v-AM3H.js";import"./CollapsiblePanel-DEVuWmUh.js";import"./MultiColumnSortDialog-DuAwsl_j.js";import"./MenuTrigger-BsxyDBhs.js";import"./CompositeItem-CtgUzBYo.js";import"./ToolbarRootContext-CfOvFLMo.js";import"./getDisabledMountTransitionStyles-DZer-X4G.js";import"./getPseudoElementBounds-CGtNbmZa.js";import"./chevron-down-MQzS0zY-.js";import"./index-CX5UJqJP.js";import"./error-DU1smNA0.js";import"./BaseCbacBanner-DDKG5AVP.js";import"./makeExternalStore-BALv-RXc.js";import"./Tooltip-CL5hRyRF.js";import"./PopoverPopup-DwNORN_q.js";import"./debounce-AC8pwCKA.js";import"./useOsdkClient-yUbLwWQs.js";import"./tick-DIC-WOhq.js";import"./DropdownField-C1qVSNaq.js";import"./isEqual-BXcx9b1w.js";import"./withOsdkMetrics-CSiTUGv5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
