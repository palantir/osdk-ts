import{j as i}from"./iframe-CfP80nhE.js";import{O as p}from"./object-table-BVaDN9oy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ck76e-zS.js";import"./preload-helper-DVx9So3f.js";import"./Table-C-C6MgHD.js";import"./index-COwN8tdJ.js";import"./Dialog-iX7BQDos.js";import"./cross-Dhhk-QOY.js";import"./svgIconContainer-ByL1CzmI.js";import"./useBaseUiId-BpCYJZt6.js";import"./InternalBackdrop-Bx7guY_d.js";import"./composite-BXpnnXVg.js";import"./index-CTbyqW3F.js";import"./index-5ZL8iVjG.js";import"./index-yQDp3qiC.js";import"./useEventCallback-BZgh7tEU.js";import"./SkeletonBar-BTKdZ9Ff.js";import"./LoadingCell-CB6w0OIv.js";import"./ColumnConfigDialog-C-rNyPlT.js";import"./DraggableList-BTeUHn5f.js";import"./search-DBbR_HQC.js";import"./Input-C5rpYEfy.js";import"./useControlled-DY45BqZY.js";import"./Button-CBX6PhDU.js";import"./small-cross-MDPhdUvt.js";import"./ActionButton-bm-7ANXn.js";import"./Checkbox-HB4hmGD9.js";import"./useValueChanged-BWuoub0f.js";import"./CollapsiblePanel-C-Oui3tr.js";import"./MultiColumnSortDialog-FvhHmpMw.js";import"./MenuTrigger-BVMKdwJK.js";import"./CompositeItem-rrhF1DOt.js";import"./ToolbarRootContext-BNZ6uAxf.js";import"./getDisabledMountTransitionStyles-CkkZsrSS.js";import"./getPseudoElementBounds-B5VczZa8.js";import"./chevron-down-DosI46m-.js";import"./index-Db0uTKuy.js";import"./error-D8W3ZfFh.js";import"./BaseCbacBanner-Dx8ja9_G.js";import"./makeExternalStore-CX8kqVGx.js";import"./Tooltip-I7xftFyx.js";import"./isObject-C97A8-HS.js";import"./debounce-o-BE-ayW.js";import"./useOsdkClient-BiT3AVNq.js";import"./tick-bPvw1r3T.js";import"./DropdownField-DFKXNXg2.js";import"./isEqual-BqwGPlqV.js";import"./_baseIsEqual-7qS6C5tt.js";import"./withOsdkMetrics-B-Iw4pyn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
