import{j as i}from"./iframe-Bf2U0wCC.js";import{O as p}from"./object-table-OXNT7OpI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cj5sZLKw.js";import"./preload-helper-B7BTsDqe.js";import"./Table-CwvnrNvY.js";import"./index-DTioBO_V.js";import"./Dialog-C61hzq8j.js";import"./cross-DV8e5TBd.js";import"./svgIconContainer-DpvB8Y2n.js";import"./useBaseUiId-9mx6zIx7.js";import"./InternalBackdrop-BILNsdtA.js";import"./composite-CuGbenFt.js";import"./index-CCvKupVl.js";import"./index-B_wOLzlx.js";import"./index-BxK_xSmV.js";import"./useEventCallback-DSQicMgE.js";import"./SkeletonBar-DBSEcPZi.js";import"./LoadingCell-Cojawg0b.js";import"./ColumnConfigDialog-BnX62pS1.js";import"./DraggableList--16cOjqh.js";import"./search-CSich7qy.js";import"./Input-DHFhxehL.js";import"./useControlled-Bdm8AXhj.js";import"./isEqual-CFr-5M8s.js";import"./isObject-BT7OCmwv.js";import"./Button-ZT6AtrIL.js";import"./ActionButton-Bg9xuvsN.js";import"./Checkbox-MaMlRZpO.js";import"./useValueChanged-CQlo19Nx.js";import"./CollapsiblePanel-CCStv30f.js";import"./MultiColumnSortDialog-BuhrcQLV.js";import"./MenuTrigger-RlWUsL5i.js";import"./CompositeItem-IczX1adk.js";import"./ToolbarRootContext-DJE5EDVH.js";import"./getDisabledMountTransitionStyles-C8Ps9vte.js";import"./getPseudoElementBounds-DeTAVI5M.js";import"./chevron-down-CYc3xdZN.js";import"./index-xzJ-XSgN.js";import"./error-p0-ItGgy.js";import"./BaseCbacBanner-DaYGAsYZ.js";import"./makeExternalStore-SEqUXvVt.js";import"./Tooltip-CjVk8_-5.js";import"./PopoverPopup-DoSXd954.js";import"./toNumber-B_n9-lZk.js";import"./useOsdkClient-RXDPaXmq.js";import"./tick-DoAEo7vC.js";import"./DropdownField-C_x97BWO.js";import"./withOsdkMetrics-DiupHODT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
