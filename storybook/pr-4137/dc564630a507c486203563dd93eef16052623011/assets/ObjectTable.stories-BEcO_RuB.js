import{j as i}from"./iframe-HPloXe9j.js";import{O as p}from"./object-table-Dw0TlSIB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D43P7GM-.js";import"./preload-helper-DScJgkz5.js";import"./Table-SpiJn5fd.js";import"./index-CYy51o6d.js";import"./Dialog-xwTFg4xc.js";import"./cross-9AkiFjIe.js";import"./svgIconContainer-DgH7XjE0.js";import"./useBaseUiId-CuSCou4B.js";import"./InternalBackdrop-CuN7aJKc.js";import"./composite-BKkRB1Ja.js";import"./index-CZ-MIMEA.js";import"./index-CLiETF6g.js";import"./index-BtQkTWRV.js";import"./useEventCallback-D7m3Yiiv.js";import"./SkeletonBar-BmlxW_EU.js";import"./LoadingCell-DYdNzb3Q.js";import"./ColumnConfigDialog-CW49yF_5.js";import"./DraggableList-HqZPos2A.js";import"./search-BtGEDCk0.js";import"./Input-BxTgEocG.js";import"./useControlled-8YOYv55u.js";import"./Button-6Q_hxnNq.js";import"./small-cross-Ccl3EiTU.js";import"./ActionButton-CzZ5C-jr.js";import"./Checkbox-Gx-UAF5W.js";import"./useValueChanged-D8dkL44z.js";import"./CollapsiblePanel-DgpfvzE6.js";import"./MultiColumnSortDialog-Ddk1Lns6.js";import"./MenuTrigger-BcanciK8.js";import"./CompositeItem-BeYsw0Rf.js";import"./ToolbarRootContext-C0mmD1Sp.js";import"./getDisabledMountTransitionStyles-I0fd0fDa.js";import"./getPseudoElementBounds-BzI7Zs8z.js";import"./chevron-down-BfaqTxAc.js";import"./index-WJ-o1DZ0.js";import"./error-CtWAgql8.js";import"./BaseCbacBanner-3MoHAqX4.js";import"./makeExternalStore-B18oZ143.js";import"./Tooltip-CXYD7mSj.js";import"./PopoverPopup-zlChUm0U.js";import"./debounce-3RrYA89K.js";import"./useOsdkClient-BZavVCL8.js";import"./tick-COIkFqpx.js";import"./DropdownField-j8LPkCHX.js";import"./isEqual-C3KsvxK8.js";import"./withOsdkMetrics-C1kb3R25.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
