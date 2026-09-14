import{j as i}from"./iframe-DMLeRer3.js";import{O as p}from"./object-table-BK8IY9k2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BU0Wccu3.js";import"./preload-helper-CgrwvKPK.js";import"./Table-DJVdytYB.js";import"./index-uCsQBnfO.js";import"./Dialog-C1PQDsNj.js";import"./cross-BxDqlCZv.js";import"./svgIconContainer-COt-rC22.js";import"./useBaseUiId-C4s8ZVxT.js";import"./InternalBackdrop-CyDdu3ej.js";import"./composite-Cge9zcMx.js";import"./index-XhF3-Ii5.js";import"./index-vxfuwNf-.js";import"./index-Ch7aUkCf.js";import"./useEventCallback-D_QVHtF8.js";import"./SkeletonBar-DCA00Bpr.js";import"./LoadingCell-DnHeKuMK.js";import"./ColumnConfigDialog-_mRyyu4y.js";import"./DraggableList-CSWRiJQo.js";import"./search-C183X4Rd.js";import"./Input-LP4KcDLo.js";import"./useControlled-DG760Vv3.js";import"./Button-DPPusxtK.js";import"./small-cross-gPJdhXBg.js";import"./ActionButton-Dom-ym7d.js";import"./Checkbox-D8cF9L1H.js";import"./useValueChanged-hJ0IWPXR.js";import"./CollapsiblePanel-B-bD3HOB.js";import"./MultiColumnSortDialog-BcIkmaGf.js";import"./MenuTrigger-DKaRJM5B.js";import"./CompositeItem-BKFtY3yw.js";import"./ToolbarRootContext-DJJ5b_fP.js";import"./getDisabledMountTransitionStyles-HfDH4vRh.js";import"./getPseudoElementBounds-V4Y4w-GJ.js";import"./chevron-down-Cn9rULd1.js";import"./index-C9zE8P46.js";import"./error-CtIw9Q7f.js";import"./BaseCbacBanner-7dqz0vdK.js";import"./makeExternalStore-DV-LpRK9.js";import"./Tooltip-C0h78S3t.js";import"./PopoverPopup-C-e8gtkY.js";import"./debounce-DJvA31U4.js";import"./useOsdkClient-Fs_RpKoY.js";import"./tick-CvPk6d_r.js";import"./DropdownField-ajA85Z4P.js";import"./isEqual-BUchmOWF.js";import"./withOsdkMetrics-DV6FYw-u.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
