import{j as i}from"./iframe-B9fWy8hT.js";import{O as p}from"./object-table-UzyRvJs7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DC7-9KTD.js";import"./preload-helper-DWfHVW0p.js";import"./Table-B-dV38K7.js";import"./index-DcqZYHDv.js";import"./Dialog-CryFY6ZU.js";import"./cross-boAy6lJm.js";import"./svgIconContainer-u2Tnk_oU.js";import"./useBaseUiId-ck-5-ASN.js";import"./InternalBackdrop-BwJaasag.js";import"./composite-BwwoklsZ.js";import"./index-BpWX3K1g.js";import"./index-Dhsqt6ib.js";import"./index-D7qo7HQk.js";import"./useEventCallback-B2wK0RRE.js";import"./SkeletonBar-D5KV0OqN.js";import"./LoadingCell--b6dzmcz.js";import"./ColumnConfigDialog-CMbqw-o4.js";import"./DraggableList-Dm-SM0mh.js";import"./search-B0RjXvIo.js";import"./Input-CD0TW00M.js";import"./useControlled-1rkkBjfr.js";import"./Button-3STy3BF8.js";import"./small-cross-CryXyuPH.js";import"./ActionButton-f0vdeYe6.js";import"./Checkbox-2x84NFWe.js";import"./useValueChanged-BvuRDLHo.js";import"./CollapsiblePanel-C6uN36Y0.js";import"./MultiColumnSortDialog-CLmLbuue.js";import"./MenuTrigger-DusR_Xdv.js";import"./CompositeItem-Cqqz-d5o.js";import"./ToolbarRootContext-ahNi1RH8.js";import"./getDisabledMountTransitionStyles-B-NyzZcB.js";import"./getPseudoElementBounds-DCZ0QUdk.js";import"./chevron-down-nNmhzWCh.js";import"./index-BEFSCPJo.js";import"./error-DVMkH5gx.js";import"./BaseCbacBanner-CjOcygPw.js";import"./makeExternalStore-QmjWX5TP.js";import"./Tooltip-BRwVJD1M.js";import"./PopoverPopup-DeB87ALM.js";import"./debounce-CRBVoOqi.js";import"./useOsdkClient-DGZy8BSJ.js";import"./tick-CbPdXS0Y.js";import"./DropdownField-bELTjpQP.js";import"./isEqual-BA3cySEE.js";import"./withOsdkMetrics-DwXDV7v7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
