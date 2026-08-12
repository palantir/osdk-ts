import{j as i}from"./iframe-DJFzVHUY.js";import{O as p}from"./object-table-DZ1ElxZ0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D6ZuOFSR.js";import"./preload-helper-2WGoxQfc.js";import"./Table-DLA0ay-U.js";import"./index-C8WJuqok.js";import"./Dialog-CAHAZJON.js";import"./cross-DNlGV5O4.js";import"./svgIconContainer-DHr-sOOW.js";import"./useBaseUiId-CGrSWTyF.js";import"./InternalBackdrop-B8XgOXJ8.js";import"./composite-CnhtXZjf.js";import"./index-DTSqGPNo.js";import"./index-DWlt5OtE.js";import"./index-Dq8k5apt.js";import"./useEventCallback-Ci1tWv_-.js";import"./SkeletonBar-46sSVcFY.js";import"./LoadingCell-BfoJJmHR.js";import"./ColumnConfigDialog-DWa2QIa2.js";import"./DraggableList-BatBu2Wo.js";import"./search-CWhFAg8g.js";import"./Input-D3nPOBMY.js";import"./useControlled-B01s-9H8.js";import"./isEqual-BsgyJ2f-.js";import"./isObject-9ANvhOR1.js";import"./Button-BDBMJl_t.js";import"./ActionButton-BY6r5N3V.js";import"./Checkbox-EiJFw0o_.js";import"./useValueChanged-Pst2Fxoc.js";import"./CollapsiblePanel-D5sFaQ_2.js";import"./MultiColumnSortDialog-D79W9Fza.js";import"./MenuTrigger-BManj4QB.js";import"./CompositeItem-tYIQGoUN.js";import"./ToolbarRootContext-ZgWiotCD.js";import"./getDisabledMountTransitionStyles-DeI9-n_T.js";import"./getPseudoElementBounds-Cx-1Ks2h.js";import"./chevron-down-boODY68H.js";import"./index-dZ139dm-.js";import"./error-DIyK6hbL.js";import"./BaseCbacBanner-BkuCMRW4.js";import"./makeExternalStore-Dlph1PzJ.js";import"./Tooltip-DKt55s1B.js";import"./PopoverPopup-vJBslg_h.js";import"./toNumber-BuE48Tud.js";import"./useOsdkClient-MqvBzpue.js";import"./tick-B68tua9r.js";import"./DropdownField-DeThirSU.js";import"./withOsdkMetrics-sbsVHgwY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
