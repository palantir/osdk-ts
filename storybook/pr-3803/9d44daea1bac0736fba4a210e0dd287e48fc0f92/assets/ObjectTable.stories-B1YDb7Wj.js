import{j as i}from"./iframe-DY5oFFGp.js";import{O as p}from"./object-table-BzZQIJps.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BIfTc7Hf.js";import"./preload-helper-BXi2a6I0.js";import"./Table-TJd2tkZN.js";import"./index-oMhfC8Kw.js";import"./Dialog-CBajenF5.js";import"./cross-CrLmq7i6.js";import"./svgIconContainer-FemtaYki.js";import"./useBaseUiId-BY-XTexC.js";import"./InternalBackdrop-CGBqK3GB.js";import"./composite-DcO2MQSU.js";import"./index-CgbXm8hK.js";import"./index-BKhB25n7.js";import"./index-DfdK9p_z.js";import"./useEventCallback-DMWfU_RW.js";import"./SkeletonBar-BujnrZlh.js";import"./LoadingCell-CYSwsJAw.js";import"./ColumnConfigDialog-CXuIBguu.js";import"./DraggableList-DuVo9fyY.js";import"./search-fXpFyeuf.js";import"./Input-nNrj-1aN.js";import"./useControlled-Dzg4K4oI.js";import"./isEqual-BsqP0w72.js";import"./isObject-CH_C7Tpz.js";import"./Button-3kT2y51o.js";import"./ActionButton-CARaLbew.js";import"./Checkbox-BHclowAu.js";import"./useValueChanged-BhrMLCu8.js";import"./CollapsiblePanel-D_javXPT.js";import"./MultiColumnSortDialog-CuX6PlQZ.js";import"./MenuTrigger-WQlSInls.js";import"./CompositeItem-mas1MCsD.js";import"./ToolbarRootContext-Dt5uDgd5.js";import"./getDisabledMountTransitionStyles-DT47_0Y1.js";import"./getPseudoElementBounds-DjDSW00Z.js";import"./chevron-down-ClPPaZyK.js";import"./index-D67MIB25.js";import"./error-TrJIu1GL.js";import"./BaseCbacBanner-DCDS0E4U.js";import"./makeExternalStore-BILayTtp.js";import"./Tooltip-Dk4L6ju7.js";import"./PopoverPopup-BlPqN4M8.js";import"./toNumber-ndB2Z0w9.js";import"./useOsdkClient-SMvNaXFe.js";import"./tick-BIyw1OVe.js";import"./DropdownField-zJdovfER.js";import"./withOsdkMetrics-C7WGUV66.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
