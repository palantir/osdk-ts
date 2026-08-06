import{j as i}from"./iframe-C3I2vfo4.js";import{O as p}from"./object-table-CNxMFsoo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BwRX9pag.js";import"./preload-helper-DLCNI-aM.js";import"./Table-BfEzPA-4.js";import"./index-CjlbFBQF.js";import"./Dialog-YEsiM-8i.js";import"./cross-Czwo4Gbj.js";import"./svgIconContainer-DC10GU3T.js";import"./useBaseUiId-BEnwlPrh.js";import"./InternalBackdrop-BE8jPQGl.js";import"./composite-B0oGrJq8.js";import"./index-g756CyT3.js";import"./index-BdMtjuPw.js";import"./index-DCn6TNXA.js";import"./useEventCallback-DTE4BUoj.js";import"./SkeletonBar-D1HLaHAx.js";import"./LoadingCell-DNrKW53T.js";import"./ColumnConfigDialog-xPB403Xf.js";import"./DraggableList-DefRhOtC.js";import"./search-BST2d1n0.js";import"./Input-6iR3oUXP.js";import"./useControlled-DjF4xmFn.js";import"./isEqual-BOzcltHn.js";import"./small-cross-DlHkqmW6.js";import"./Button-BnGX5kZd.js";import"./ActionButton-9YMIe5Rm.js";import"./Checkbox-g-lWn9kI.js";import"./useValueChanged-BM7O54FO.js";import"./CollapsiblePanel-3AzlWUtH.js";import"./MultiColumnSortDialog-ZovN2HB3.js";import"./MenuTrigger-DiTj_CD0.js";import"./CompositeItem-BgzFMOjc.js";import"./ToolbarRootContext-Cedd7atY.js";import"./getDisabledMountTransitionStyles-CMmxYxZy.js";import"./getPseudoElementBounds-BDRhvVpc.js";import"./chevron-down-CFoIf__9.js";import"./index-BxuSZPx5.js";import"./error-C5kvUQcl.js";import"./BaseCbacBanner-DS1c9Igb.js";import"./makeExternalStore-BuO4JxRk.js";import"./Tooltip-CqZsEekV.js";import"./PopoverPopup-vTDqpR3e.js";import"./Combobox-DZX4VZJC.js";import"./useOsdkClient-CT4GjcCh.js";import"./tick-CFrcd2vE.js";import"./DropdownField-B1W_-qOM.js";import"./withOsdkMetrics-CzsfC_Tx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
