import{j as i}from"./iframe-B4_LdmvC.js";import{O as p}from"./object-table-DI0B1aeb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-cyPUOZRk.js";import"./preload-helper-NaiMF-0L.js";import"./Table-C64YFzww.js";import"./index-DjXxmUSg.js";import"./Dialog-DnM81jQO.js";import"./cross-ByyhMC0G.js";import"./svgIconContainer-CqdyD_06.js";import"./useBaseUiId-D49bnhC0.js";import"./InternalBackdrop-CSZNBoeU.js";import"./composite-C8-JBw2s.js";import"./index-CDFbUPsJ.js";import"./index-DMnPNpwI.js";import"./index-BTH-2SAP.js";import"./useEventCallback-DiEJ97Pr.js";import"./SkeletonBar-CH4Er-h8.js";import"./LoadingCell-B35oQqMj.js";import"./ColumnConfigDialog-DKiL_4J1.js";import"./DraggableList-Tgs6ppMn.js";import"./search-CuDduKs4.js";import"./Input-D84OA9Cn.js";import"./useControlled-BCVYzpl3.js";import"./Button-DMJfC-Jo.js";import"./small-cross-CNTQ5kNU.js";import"./ActionButton-BCapXp1v.js";import"./Checkbox-YhHz-yme.js";import"./useValueChanged-gJKbZz5S.js";import"./CollapsiblePanel-Cq6d-sf2.js";import"./MultiColumnSortDialog-B5X38wYS.js";import"./MenuTrigger-BDYnqdaP.js";import"./CompositeItem-Te1LxRX_.js";import"./ToolbarRootContext-IBMmFjEY.js";import"./getDisabledMountTransitionStyles-CK9EkuFU.js";import"./getPseudoElementBounds-DZtnlOKj.js";import"./chevron-down-C6pppJ5O.js";import"./index-Dw8kDIA3.js";import"./error-De7UK8KB.js";import"./BaseCbacBanner-CXTir5a4.js";import"./makeExternalStore-DG8fJp9Q.js";import"./Tooltip-a9nGNvDJ.js";import"./PopoverPopup-UdMkbeCN.js";import"./debounce-C1TMjKV3.js";import"./useOsdkClient-CJsnDWQX.js";import"./tick-B07mwDIZ.js";import"./DropdownField-DDgNN9YF.js";import"./isEqual-L0Eo2ru8.js";import"./withOsdkMetrics-gLpSEa_H.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
