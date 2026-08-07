import{j as i}from"./iframe-DvSgORBk.js";import{O as p}from"./object-table-BcRX0Cmv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DvYEC0H3.js";import"./preload-helper-Bh3X1IZL.js";import"./Table-Dh5Aru4J.js";import"./index-ChyOFpSp.js";import"./Dialog-0XJ0SO-Q.js";import"./cross-BUEX2IGU.js";import"./svgIconContainer-QappFeg0.js";import"./useBaseUiId-DpoPO5jU.js";import"./InternalBackdrop-C3crqnkP.js";import"./composite-xFGPtc_t.js";import"./index-DbSXjThu.js";import"./index-BGZxf-A_.js";import"./index-BDSy7YKy.js";import"./useEventCallback-Crcc4UV6.js";import"./SkeletonBar-B_m0lEWJ.js";import"./LoadingCell-DSFLxCsS.js";import"./ColumnConfigDialog-C6yzQUu1.js";import"./DraggableList-B0hW1Fu2.js";import"./search-UUFCgVGZ.js";import"./Input-ax18PB6G.js";import"./useControlled-BB6bU1kQ.js";import"./isEqual-a-uCbEZ1.js";import"./isObject-BZyiDzdf.js";import"./Button-BvKdxg3d.js";import"./ActionButton-Dxaw-g98.js";import"./Checkbox-DxL4ZG_a.js";import"./useValueChanged-BRcf4k2H.js";import"./CollapsiblePanel-dNjLU5f9.js";import"./MultiColumnSortDialog-Cy4EqFDR.js";import"./MenuTrigger-B6XUcNMI.js";import"./CompositeItem-wIWKS7_g.js";import"./ToolbarRootContext-BskIkuOz.js";import"./getDisabledMountTransitionStyles-C56Ja1Aa.js";import"./getPseudoElementBounds-DqFjVP5N.js";import"./chevron-down-C5KpQgJ6.js";import"./index-De7UWdw5.js";import"./error-BqxbYOqB.js";import"./BaseCbacBanner-Ds0ufIuT.js";import"./makeExternalStore-Cpevbodx.js";import"./Tooltip-D6JbqPgC.js";import"./PopoverPopup-BlDf12vy.js";import"./toNumber-CF0CbTZU.js";import"./useOsdkClient-CW496Pf_.js";import"./tick-BD1_G4-a.js";import"./DropdownField-By8_V6vH.js";import"./withOsdkMetrics-BKZ5oc9t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
