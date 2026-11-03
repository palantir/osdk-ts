import{j as i}from"./iframe-C_eR_-FB.js";import{O as p}from"./object-table-RihnLn09.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DsLS9a3G.js";import"./preload-helper-D-iMj1JN.js";import"./Table-C8AAoGWT.js";import"./index-B5oDC2JQ.js";import"./Dialog-DSHxwALU.js";import"./cross-6THvcyRY.js";import"./svgIconContainer-CBJV4Tnn.js";import"./useBaseUiId-DHfbjF6K.js";import"./InternalBackdrop-CtVeclCs.js";import"./composite-CRpQuKDa.js";import"./index-JDCvzA9U.js";import"./index-C5Q3HutH.js";import"./index-C-Ct-Q1O.js";import"./useEventCallback-BSdQRjPY.js";import"./SkeletonBar-Dfyf_j8b.js";import"./LoadingCell-Dzl-OGae.js";import"./ColumnConfigDialog-UAE2sEv4.js";import"./DraggableList-VCR2ruyb.js";import"./search-BSm0Tn1z.js";import"./Input-DTI33c7U.js";import"./useControlled-BEI1fcJ3.js";import"./Button-D3eF3jJ4.js";import"./small-cross-CwIjWKJl.js";import"./ActionButton-C4NITY81.js";import"./Checkbox-DEDdXE32.js";import"./useValueChanged-D_PYMBeT.js";import"./CollapsiblePanel-5toXnu5d.js";import"./MultiColumnSortDialog-DRtR-Qs7.js";import"./MenuTrigger-kVlqUuN-.js";import"./CompositeItem-DORzwzYw.js";import"./ToolbarRootContext-MiWSvMtv.js";import"./getDisabledMountTransitionStyles-DyVQfBpM.js";import"./getPseudoElementBounds-DFY51yDa.js";import"./chevron-down-CYhIscH3.js";import"./index-DsvrxdPz.js";import"./error-BIKnaXwT.js";import"./BaseCbacBanner-PTKqEeHs.js";import"./makeExternalStore-DsUjsZj2.js";import"./Tooltip-BO3iXvgP.js";import"./PopoverPopup-BaCYp8dE.js";import"./debounce-BNBceRVR.js";import"./useOsdkClient-UY9KdTa_.js";import"./tick-C_kX7tnK.js";import"./DropdownField-BuvpvRO7.js";import"./isEqual-CGCncotN.js";import"./withOsdkMetrics-D4cys7NY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
