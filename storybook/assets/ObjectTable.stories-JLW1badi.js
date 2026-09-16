import{j as i}from"./iframe-DV1yCMsw.js";import{O as p}from"./object-table-CDFR86N1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DlXPEwVX.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CSRtT_R-.js";import"./index-azQz1-D1.js";import"./Dialog-vp7CaCgc.js";import"./cross-DNR9YQ3a.js";import"./svgIconContainer-BeM6_7kW.js";import"./useBaseUiId-DOZms5KT.js";import"./InternalBackdrop-DdEug9RR.js";import"./composite-DfXvakAK.js";import"./index--Byjp6h8.js";import"./index-CmQmrs9R.js";import"./index-EhU39UPy.js";import"./useEventCallback-COYwW9Ss.js";import"./SkeletonBar-D_eY-DTv.js";import"./LoadingCell-Be_iH5t9.js";import"./ColumnConfigDialog-BL_HoTcd.js";import"./DraggableList-C67OFZGX.js";import"./search-CQsBxLkU.js";import"./Input-PDMkMKii.js";import"./useControlled-nUfbdO0a.js";import"./Button-DPHupdFu.js";import"./small-cross-DYpEQl9d.js";import"./ActionButton-LfdBhkgt.js";import"./Checkbox-jY5e4hfS.js";import"./useValueChanged-CJ0AX3Q5.js";import"./CollapsiblePanel-BW2nV8fU.js";import"./MultiColumnSortDialog-dKIsRy2L.js";import"./MenuTrigger-q7n2torl.js";import"./CompositeItem-BUg5Nmhs.js";import"./ToolbarRootContext-0T6zDh9h.js";import"./getDisabledMountTransitionStyles-CI5qk8fd.js";import"./getPseudoElementBounds-DPHhSEhv.js";import"./chevron-down-GWsulQRf.js";import"./index-BVIyipfq.js";import"./error-t-4CnxKH.js";import"./BaseCbacBanner-Dz0_Knjv.js";import"./makeExternalStore-0Z503ATJ.js";import"./Tooltip-T_V-Cw1B.js";import"./PopoverPopup-CXIkOXNy.js";import"./debounce-DPm4QGed.js";import"./useOsdkClient-KTkVgi-z.js";import"./tick-7CTVhgFt.js";import"./DropdownField-ByQ7XVe-.js";import"./isEqual-BfcI4Xz_.js";import"./withOsdkMetrics-DNZcGQG2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
