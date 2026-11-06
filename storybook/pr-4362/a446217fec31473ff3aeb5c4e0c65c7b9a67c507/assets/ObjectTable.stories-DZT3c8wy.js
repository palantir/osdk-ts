import{j as i}from"./iframe-D1PWQ8eg.js";import{O as p}from"./object-table-DhPmn3zV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BryLEdzQ.js";import"./preload-helper-ChDiB21Q.js";import"./Table-BjH6ZK7E.js";import"./index-BfN20Yol.js";import"./Dialog-D3A-zY1u.js";import"./cross-DpDhreOD.js";import"./svgIconContainer-BXQnyB7k.js";import"./useBaseUiId-DQZDizk3.js";import"./InternalBackdrop-Cd6fjHcd.js";import"./composite-Dz4PW6bE.js";import"./index-C-gFUxtR.js";import"./index-k_FhLYlw.js";import"./index-BC0Fj6cX.js";import"./useEventCallback-CaQTcD9p.js";import"./SkeletonBar-B9-g2cwM.js";import"./LoadingCell-DFGDcVga.js";import"./ColumnConfigDialog-C8-Xmgyw.js";import"./DraggableList-P95AxxVB.js";import"./search-Bzfmr3Yu.js";import"./Input-DcHTO1Eg.js";import"./useControlled-D21_fOEO.js";import"./Button-DGBWNQgJ.js";import"./small-cross-hiTnrqyw.js";import"./ActionButton-BFBOVnYa.js";import"./Checkbox-BtoYudj8.js";import"./useValueChanged-C8diiUx6.js";import"./CollapsiblePanel-Bw_yq71x.js";import"./MultiColumnSortDialog-B_Wzgvor.js";import"./MenuTrigger-4x01M3QC.js";import"./CompositeItem-DoK1nl1V.js";import"./ToolbarRootContext-DVH0WoOd.js";import"./getDisabledMountTransitionStyles-DTkXPwSS.js";import"./getPseudoElementBounds-DB6IKhjF.js";import"./chevron-down-h_s7BHqv.js";import"./index-BXJyqqou.js";import"./error-CawAj1Hu.js";import"./BaseCbacBanner-CRapjwAS.js";import"./makeExternalStore-C-kCn6EW.js";import"./Tooltip-Bgo0GtJm.js";import"./isObject-Br-jS6Ya.js";import"./debounce-DKSfc2Jx.js";import"./useOsdkClient-BeJmH5-G.js";import"./tick-C3zXPXqC.js";import"./DropdownField-RNzF6eBl.js";import"./isEqual-ZwzT0KOc.js";import"./_baseIsEqual--05v_xkz.js";import"./withOsdkMetrics-DniPK0ul.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
