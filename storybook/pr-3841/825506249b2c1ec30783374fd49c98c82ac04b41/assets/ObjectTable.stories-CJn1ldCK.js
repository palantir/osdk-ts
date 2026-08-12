import{j as i}from"./iframe-CMhSXf7u.js";import{O as p}from"./object-table-Mp8InD2l.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-9Rbus9vl.js";import"./preload-helper-Brrs_dmH.js";import"./Table-DklL9Zy6.js";import"./index-D-EqtuMO.js";import"./Dialog-CC0lOn9D.js";import"./cross-CDflrrvD.js";import"./svgIconContainer-BI44O8kK.js";import"./useBaseUiId-DJLmBw3m.js";import"./InternalBackdrop-DM7i7wCP.js";import"./composite-CZ_sbuO7.js";import"./index-e3-NUaQu.js";import"./index-7out07OT.js";import"./index-D1lmcvuc.js";import"./useEventCallback-hoIOXFa_.js";import"./SkeletonBar-BFMS0GW4.js";import"./LoadingCell-DCwYyJZu.js";import"./ColumnConfigDialog-bLJOU6Di.js";import"./DraggableList-CFiryhMG.js";import"./search-D9SDfmhX.js";import"./Input-BdM-mg3J.js";import"./useControlled-Yx4KOLdx.js";import"./isEqual-KbtjeMQV.js";import"./isObject-BuUXoseV.js";import"./Button-CYNxWIo5.js";import"./ActionButton-jy2VWN7r.js";import"./Checkbox-B4EJG7JE.js";import"./useValueChanged-BUNxdFiJ.js";import"./CollapsiblePanel-Dd1M5TG9.js";import"./MultiColumnSortDialog-CFOj4bAs.js";import"./MenuTrigger-CQRFhwW_.js";import"./CompositeItem-B3dhh8ia.js";import"./ToolbarRootContext-Dt3o3mOm.js";import"./getDisabledMountTransitionStyles-2Y8GdGAv.js";import"./getPseudoElementBounds-BmO4MZ3H.js";import"./chevron-down-UD5qoask.js";import"./index-DRucm0b5.js";import"./error-Cia9mwql.js";import"./BaseCbacBanner-bC-IYL-r.js";import"./makeExternalStore-CmWedr43.js";import"./Tooltip-OPdt0l6L.js";import"./PopoverPopup-BxsPUhZJ.js";import"./toNumber-Bv0An-Lw.js";import"./useOsdkClient-v7ltKG8Z.js";import"./tick-lvvqI-zN.js";import"./DropdownField-daOnZPEH.js";import"./withOsdkMetrics-C5gJ204R.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
