import{j as i}from"./iframe-DaD-kZgD.js";import{O as p}from"./object-table-BqGGw46Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BagHfIlh.js";import"./preload-helper-B5rjj0RW.js";import"./Table-DMqFeCUw.js";import"./index-BunTbxSe.js";import"./Dialog-CLyz64vM.js";import"./cross-VN_C6F1c.js";import"./svgIconContainer-BuHjzoHd.js";import"./useBaseUiId-D_mAJVOg.js";import"./InternalBackdrop-D9rvDhcY.js";import"./composite-CvSGc8uG.js";import"./index-BLudVFJt.js";import"./index-CibRS9EP.js";import"./index-EjKiPaYv.js";import"./useEventCallback-DZwsnGgj.js";import"./SkeletonBar-CMKv95YA.js";import"./LoadingCell-BAlyAEa4.js";import"./ColumnConfigDialog-DRpER2af.js";import"./DraggableList-CxwPaX4P.js";import"./search-Ba2RAVKf.js";import"./Input-DoThMFAr.js";import"./useControlled-DETcBtyj.js";import"./Button-DIAY5YBq.js";import"./small-cross-3C_RgODH.js";import"./ActionButton-CGL0xlBn.js";import"./Checkbox-BShadSqy.js";import"./useValueChanged-BpD_v2NO.js";import"./CollapsiblePanel-DUX36nEl.js";import"./MultiColumnSortDialog-CNcYfXDj.js";import"./MenuTrigger-BL7Lg1OE.js";import"./CompositeItem-vvOtpWtM.js";import"./ToolbarRootContext-BppVD4NW.js";import"./getDisabledMountTransitionStyles-uJHk-LBD.js";import"./getPseudoElementBounds-DYbJ4f7q.js";import"./chevron-down-CvKLjMsu.js";import"./index-BBz_uzYR.js";import"./error-CF8X_kHA.js";import"./BaseCbacBanner-Z2FnoZWA.js";import"./makeExternalStore-DiTJ7dI9.js";import"./Tooltip-DSYkY7dD.js";import"./PopoverPopup-COghbQef.js";import"./debounce-Ry2gNXo0.js";import"./useOsdkClient-BpNsbtIJ.js";import"./tick-BlrBnSjV.js";import"./DropdownField-To6MSkSU.js";import"./isEqual-PjwQKt2P.js";import"./withOsdkMetrics-D6sZIqzZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
