import{j as i}from"./iframe-CBr1o5iR.js";import{O as p}from"./object-table-CuJQ117O.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BsAlgmDt.js";import"./preload-helper-C74Zs9Qj.js";import"./Table-Cwim2QE1.js";import"./index-BUnoFm4T.js";import"./Dialog-XfW09A5R.js";import"./cross-COUmmIjR.js";import"./svgIconContainer-BfpQZBbK.js";import"./useBaseUiId-B-WY1xvV.js";import"./InternalBackdrop-BK9t79dJ.js";import"./composite-CjSMUHiF.js";import"./index-Bl6CdKL7.js";import"./index-D63as4vf.js";import"./index-BJUK4yUC.js";import"./useEventCallback-C1Y3Qpyp.js";import"./SkeletonBar-C0jy6f_e.js";import"./LoadingCell-B3zo1-Lq.js";import"./ColumnConfigDialog-DmwsYXZH.js";import"./DraggableList-DwIvpdSM.js";import"./search-DiTFA1qk.js";import"./Input-80YhWUbK.js";import"./useControlled-BvEl2Zx8.js";import"./isEqual-BLVz25eK.js";import"./isObject-D-X-xMro.js";import"./Button-BATNsIkC.js";import"./ActionButton-BfnSKlp2.js";import"./Checkbox-LYqyex1v.js";import"./useValueChanged-CYqSlkeM.js";import"./CollapsiblePanel-BQKTqvEi.js";import"./MultiColumnSortDialog-DAM3B_eA.js";import"./MenuTrigger-BddPBcWL.js";import"./CompositeItem-Bzks3A9T.js";import"./ToolbarRootContext-CAjQ8J-W.js";import"./getDisabledMountTransitionStyles-xPcadgCj.js";import"./getPseudoElementBounds-DhFt5lJS.js";import"./chevron-down-CeEcx8XI.js";import"./index-QEFR3hOZ.js";import"./error-BUZq3IDN.js";import"./BaseCbacBanner-Bomh_2PN.js";import"./makeExternalStore-B8_1tONR.js";import"./Tooltip-DhBv5yUJ.js";import"./PopoverPopup-D1AQ-qyT.js";import"./toNumber-ClLyCc0o.js";import"./useOsdkClient-DdlXi9P2.js";import"./tick-Cz1Ojot5.js";import"./DropdownField-DkcmVDs6.js";import"./withOsdkMetrics-BvV4fjpx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
