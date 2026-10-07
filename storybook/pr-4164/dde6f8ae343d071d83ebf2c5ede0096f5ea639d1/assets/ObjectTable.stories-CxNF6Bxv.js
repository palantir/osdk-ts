import{j as i}from"./iframe-BmAfqmVA.js";import{O as p}from"./object-table-DwtrgXe0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C4D_bHoV.js";import"./preload-helper-Dw8BIZgV.js";import"./Table-D0gnuVks.js";import"./index-B62tNakJ.js";import"./Dialog-BJN_I2ET.js";import"./cross-CIbg1fnp.js";import"./svgIconContainer-DmqE13LP.js";import"./useBaseUiId-Ve_Ndjtk.js";import"./InternalBackdrop-B-HL31XO.js";import"./composite-D_ZO_GVZ.js";import"./index-dHY7n0A_.js";import"./index-fK0RIQv7.js";import"./index-sRqT8LaY.js";import"./useEventCallback-Dst592Es.js";import"./SkeletonBar-CpgIKy9M.js";import"./LoadingCell-DFItCsbF.js";import"./ColumnConfigDialog-DGQnTD89.js";import"./DraggableList-CZmnsgWW.js";import"./search-CXOC_cUa.js";import"./Input-Nk05MRQJ.js";import"./useControlled-DnfhwrQ9.js";import"./Button-B6o09hJ9.js";import"./small-cross-hJq0bu3d.js";import"./ActionButton-C7nJBpda.js";import"./Checkbox-tlw2znwL.js";import"./useValueChanged-BOO_UIZl.js";import"./CollapsiblePanel-BARvj3J1.js";import"./MultiColumnSortDialog-CjzVK0QW.js";import"./MenuTrigger-CZUdBscp.js";import"./CompositeItem-DXCwTfSl.js";import"./ToolbarRootContext-BGE7RlZq.js";import"./getDisabledMountTransitionStyles-D7fYxIXW.js";import"./getPseudoElementBounds-vijoVG-C.js";import"./chevron-down-BlYRgYBH.js";import"./index-K0yxoLEe.js";import"./error-Dmi1futd.js";import"./BaseCbacBanner-BCmjq5Q4.js";import"./makeExternalStore-Bdb1GDa3.js";import"./Tooltip-CvzNm6MG.js";import"./PopoverPopup-BO42v_DZ.js";import"./debounce-J4cnnbIe.js";import"./useOsdkClient-Dkseg2Ko.js";import"./tick-C2TrJ_N8.js";import"./DropdownField-D1g5_LVv.js";import"./isEqual-BY0VpmlK.js";import"./withOsdkMetrics-ihUosZll.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
