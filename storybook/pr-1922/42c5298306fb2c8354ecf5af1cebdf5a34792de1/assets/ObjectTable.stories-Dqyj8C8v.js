import{j as i}from"./iframe-D1BrYSgn.js";import{O as p}from"./object-table-Bj9JA1Xc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BksAbQsM.js";import"./preload-helper-x1jfnViK.js";import"./Table-Dqc22tTG.js";import"./index-H1o4gMgc.js";import"./Dialog-CR1UIZo3.js";import"./cross-DKNlp0UL.js";import"./svgIconContainer-CQqlv9TI.js";import"./useBaseUiId-Dvap0bP_.js";import"./InternalBackdrop-DUf4EMeQ.js";import"./composite-D3X73IFC.js";import"./index-BZ-ZbQxZ.js";import"./index-i3VUUG_u.js";import"./index-BJAhCfnS.js";import"./useEventCallback-DIiO76cn.js";import"./SkeletonBar-C60U87_0.js";import"./LoadingCell-DF_FczQR.js";import"./ColumnConfigDialog-ubWDyr1h.js";import"./DraggableList-3I16ODhp.js";import"./search-CwESW8sH.js";import"./Input-C7rXISug.js";import"./useControlled-CefdKsdA.js";import"./isEqual-dQR431dZ.js";import"./isObject-D2ODchoK.js";import"./Button-BqE3w5dA.js";import"./ActionButton-Axn_JdZJ.js";import"./Checkbox-CS2akwig.js";import"./useValueChanged-BEvHhJ0_.js";import"./CollapsiblePanel-aDTeH6iG.js";import"./MultiColumnSortDialog-_IeECp3G.js";import"./MenuTrigger-3WsS15cK.js";import"./CompositeItem-Bb6lkocQ.js";import"./ToolbarRootContext-B-YNIawA.js";import"./getDisabledMountTransitionStyles-OzosozBh.js";import"./getPseudoElementBounds-CtaIpHjM.js";import"./chevron-down-YMA5FLRc.js";import"./index-nPGdI-1b.js";import"./error-Ccjv0zYu.js";import"./BaseCbacBanner-D1FlymIK.js";import"./makeExternalStore-COZpMJn9.js";import"./Tooltip-DQWY4I5i.js";import"./PopoverPopup-Bx9_RsE6.js";import"./toNumber-rHQjPixX.js";import"./useOsdkClient-Bm4EvmOB.js";import"./tick-CCRdabew.js";import"./DropdownField-isqQdDNF.js";import"./withOsdkMetrics-cOiQ1jpU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
