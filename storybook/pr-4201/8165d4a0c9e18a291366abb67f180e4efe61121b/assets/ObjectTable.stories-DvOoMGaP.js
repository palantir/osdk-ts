import{j as i}from"./iframe-BpL6s-zg.js";import{O as p}from"./object-table-CeM1EyR8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BXJltOpy.js";import"./preload-helper-uTT7htns.js";import"./Table-CPLk5KIo.js";import"./index-6LlZ2BiN.js";import"./Dialog-BnqqV4Xt.js";import"./cross-B7Srqs_a.js";import"./svgIconContainer-9i-2F4mS.js";import"./useBaseUiId-1PhUK91a.js";import"./InternalBackdrop-D528jJZb.js";import"./composite-CCy_hQsH.js";import"./index-BQedclYz.js";import"./index-D0tUKd5l.js";import"./index-DZewdgmc.js";import"./useEventCallback-ByzE1gWY.js";import"./SkeletonBar-CxTajJtW.js";import"./LoadingCell-tgtZraSR.js";import"./ColumnConfigDialog-CnTCoQBV.js";import"./DraggableList-Dj9KUGrg.js";import"./search-RLZBnffN.js";import"./Input-CLHBBGaB.js";import"./useControlled-CkduZeJ8.js";import"./Button-D6y5uRFv.js";import"./small-cross-DGh8lQQj.js";import"./ActionButton-B-kPuu4e.js";import"./Checkbox-7-uF9yyr.js";import"./useValueChanged-DcvOcb0S.js";import"./CollapsiblePanel-BjVwkesV.js";import"./MultiColumnSortDialog-COTOGiLX.js";import"./MenuTrigger-2wNjABP5.js";import"./CompositeItem-Dr9l_3tm.js";import"./ToolbarRootContext-DExmINYo.js";import"./getDisabledMountTransitionStyles-BUZvxxVE.js";import"./getPseudoElementBounds-dW4anVUY.js";import"./chevron-down-CE2IRiE6.js";import"./index-DW6U2psz.js";import"./error-DthClOU-.js";import"./BaseCbacBanner-Bu34vBfd.js";import"./makeExternalStore-CYzPQh_a.js";import"./Tooltip-NF3ObYaS.js";import"./PopoverPopup-CfyCkjev.js";import"./debounce-h76tYODF.js";import"./useOsdkClient-Dn3QR38F.js";import"./tick-D39791G3.js";import"./DropdownField-Cg0VCTB8.js";import"./isEqual-UMI_cY1O.js";import"./withOsdkMetrics-BI3kiEc3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
