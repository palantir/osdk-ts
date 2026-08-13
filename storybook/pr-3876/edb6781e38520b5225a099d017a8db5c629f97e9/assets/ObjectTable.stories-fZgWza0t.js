import{j as i}from"./iframe-BnFW5qcd.js";import{O as p}from"./object-table-DpZKEsGF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BHUP-WUW.js";import"./preload-helper-CNP4KH2h.js";import"./Table-B5A2-075.js";import"./index-cKOHoRyg.js";import"./Dialog-BcixpPY9.js";import"./cross-DNbpGFX0.js";import"./svgIconContainer-Bodb3rrt.js";import"./useBaseUiId-D6lJdHIa.js";import"./InternalBackdrop-CmeR-qjL.js";import"./composite-CvySWJ8Z.js";import"./index-BL84tjwg.js";import"./index-C1VvjJNC.js";import"./index-CBGW4lEy.js";import"./useEventCallback-C-0rxgFy.js";import"./SkeletonBar-CcA6jzxL.js";import"./LoadingCell-Bxn1SRvU.js";import"./ColumnConfigDialog-KESGpiaY.js";import"./DraggableList-DPRVDCNI.js";import"./search-D9IFs7N_.js";import"./Input-CE1LAlWc.js";import"./useControlled-_BjM0h58.js";import"./Button-BWyY3kpw.js";import"./small-cross-Cr5VBWUI.js";import"./ActionButton-C7QNn70Z.js";import"./Checkbox-BuO9H-YM.js";import"./useValueChanged-CJb1heYG.js";import"./CollapsiblePanel-BVe58I7Q.js";import"./MultiColumnSortDialog--H_xB0vm.js";import"./MenuTrigger-DHzBcdzW.js";import"./CompositeItem-Cs7ZSGuB.js";import"./ToolbarRootContext-C1j3JbNp.js";import"./getDisabledMountTransitionStyles-BPLTyrx0.js";import"./getPseudoElementBounds-BMRMQ8Bv.js";import"./chevron-down-DKM-O5Y0.js";import"./index-BPVr2RDp.js";import"./error-TzDePL8Z.js";import"./BaseCbacBanner-BcBr0dVU.js";import"./makeExternalStore-Bf_CkFqj.js";import"./Tooltip-CW7yW1bf.js";import"./PopoverPopup-N71IRvI2.js";import"./debounce-C3zlIzLL.js";import"./useOsdkClient-C1FnG1xl.js";import"./tick-DTrJYZYq.js";import"./DropdownField-nlLolSiv.js";import"./isEqual-CFM-mB7S.js";import"./withOsdkMetrics-BThk06i8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
