import{j as i}from"./iframe-Dsupwakr.js";import{O as p}from"./object-table-w2-fiDar.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DDXdt6s7.js";import"./preload-helper-CR7mXLCL.js";import"./Table-BOxk3yVu.js";import"./index-CkpgR3fu.js";import"./Dialog-CmgL-5Qa.js";import"./cross-CWb-HvPA.js";import"./svgIconContainer-C-Aw8Ccc.js";import"./useBaseUiId-DzCfcDkQ.js";import"./InternalBackdrop-TqY-ZmCF.js";import"./composite-HdCWnL8f.js";import"./index-B_g_AMfh.js";import"./index-ChctX4zI.js";import"./index-CkY0X6aD.js";import"./useEventCallback-hg8NIUwU.js";import"./SkeletonBar-CS_2Phj-.js";import"./LoadingCell-DAV-Cnle.js";import"./ColumnConfigDialog-FZLRyMnP.js";import"./DraggableList-BlXMBhwx.js";import"./search-B3WEXmh0.js";import"./Input-C5vpLtnd.js";import"./useControlled-CqadE3GD.js";import"./Button-D1tcxnZe.js";import"./small-cross-lpp9GSO5.js";import"./ActionButton-DFIDoYFE.js";import"./Checkbox-B32Wz5CE.js";import"./useValueChanged-D8HWHRkD.js";import"./CollapsiblePanel-DHvmYoFQ.js";import"./MultiColumnSortDialog-DB5S2PrC.js";import"./MenuTrigger-sLihCRYM.js";import"./CompositeItem-B9L7nJBI.js";import"./ToolbarRootContext-BtvPE-us.js";import"./getDisabledMountTransitionStyles-C4yseyHM.js";import"./getPseudoElementBounds-C9z3taTH.js";import"./chevron-down-CDVIUa1b.js";import"./index-J7JFMYQD.js";import"./error-CLndc-8a.js";import"./BaseCbacBanner-BdKOGSlG.js";import"./makeExternalStore-cmPwX49q.js";import"./Tooltip-CcYrLi8s.js";import"./PopoverPopup-BdZyFeD4.js";import"./debounce-FnFOEK_K.js";import"./useOsdkClient-3MHXKvwo.js";import"./tick-hPempDzT.js";import"./DropdownField-7N09oAJb.js";import"./isEqual-DdnTZVHH.js";import"./withOsdkMetrics-Chrjv6Bf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
