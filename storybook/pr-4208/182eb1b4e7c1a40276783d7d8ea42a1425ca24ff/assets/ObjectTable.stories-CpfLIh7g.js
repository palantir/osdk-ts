import{j as i}from"./iframe-Bp6ykM_Q.js";import{O as p}from"./object-table-BCe6X2NZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BfWGzt8u.js";import"./preload-helper-hhg-UuLO.js";import"./Table-cs7ZNKYh.js";import"./index-CkmqH5v_.js";import"./Dialog-B-jf4vpJ.js";import"./cross-C2XcpcwW.js";import"./svgIconContainer-Bbfw_TbJ.js";import"./useBaseUiId-B9JaL3lL.js";import"./InternalBackdrop-CUeGJ88S.js";import"./composite-CELT5bVY.js";import"./index-D7B9vPdC.js";import"./index-DPOB5ZLL.js";import"./index-6iOBoNLd.js";import"./useEventCallback-ZDpPV_9c.js";import"./SkeletonBar-CD8Roa0c.js";import"./LoadingCell-BcgU58AU.js";import"./ColumnConfigDialog-BlycZ3ES.js";import"./DraggableList-DVYLEZGt.js";import"./search-oCnrD3HI.js";import"./Input-8kWtUrGW.js";import"./useControlled-DfSSocWG.js";import"./Button-CqF-mJTx.js";import"./small-cross-DKRvvaJW.js";import"./ActionButton-CG_FRqzp.js";import"./Checkbox-aUL_Dhbs.js";import"./useValueChanged-BRLBb_6E.js";import"./CollapsiblePanel-DcU2Xohc.js";import"./MultiColumnSortDialog-BYOxy7Ur.js";import"./MenuTrigger-DaCREkC8.js";import"./CompositeItem-DEa3hl5L.js";import"./ToolbarRootContext-DvDyj9lB.js";import"./getDisabledMountTransitionStyles-BlFqDN7h.js";import"./getPseudoElementBounds-DT01MB08.js";import"./chevron-down-DzC25JPe.js";import"./index-KVwHojvU.js";import"./error-pcj4mGvq.js";import"./BaseCbacBanner-Ccn2hkyq.js";import"./makeExternalStore-D6cQ2Vrj.js";import"./Tooltip-CPA2WKzn.js";import"./PopoverPopup-DgjT7gOt.js";import"./debounce-DeyxfuXX.js";import"./useOsdkClient-BXI0wDfp.js";import"./tick-CwYSeXXI.js";import"./DropdownField-CHmFTRiZ.js";import"./isEqual-_49y5ZAW.js";import"./withOsdkMetrics-BuzXmon2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
