import{j as i}from"./iframe-CAOw1_Np.js";import{O as p}from"./object-table-Bnm6FDPO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-82msb3vF.js";import"./preload-helper-BtDOje63.js";import"./Table-B5_PXRuD.js";import"./index-rKNeW6R2.js";import"./Dialog-CBafvJcd.js";import"./cross-6UH6f3dc.js";import"./svgIconContainer-DJZ5kPqi.js";import"./useBaseUiId-BRTQVt9V.js";import"./InternalBackdrop-DdGTfKiB.js";import"./composite-ceXOKcGl.js";import"./index-B9i7IC3F.js";import"./index-Bj9jZdxR.js";import"./index-CSvoLCmH.js";import"./useEventCallback-DP-govtU.js";import"./SkeletonBar-4wb1Kl_E.js";import"./LoadingCell-Cj-L5vTI.js";import"./ColumnConfigDialog-Dh-jOaO7.js";import"./DraggableList-D1kkjKgg.js";import"./search-CAyVB4HI.js";import"./Input-BIFRYkQa.js";import"./useControlled-BcHOqTg-.js";import"./Button-BCAtXo9W.js";import"./small-cross-BhY_ToEZ.js";import"./ActionButton-D6SZJ9IH.js";import"./Checkbox-Bh7-Ldil.js";import"./useValueChanged-BFl7n5IX.js";import"./CollapsiblePanel-D09cr1ad.js";import"./MultiColumnSortDialog-BBIMSvJM.js";import"./MenuTrigger-447gUd-z.js";import"./CompositeItem-CJnfXQEg.js";import"./ToolbarRootContext-kfYngOQa.js";import"./getDisabledMountTransitionStyles-BKTsnLJ9.js";import"./getPseudoElementBounds-B-ChLQl_.js";import"./chevron-down-CrNYgO2n.js";import"./index-DAICdrKF.js";import"./error-BklEgYFX.js";import"./BaseCbacBanner-CmQ2fwuw.js";import"./makeExternalStore-BP-pbk-j.js";import"./Tooltip-Brm-nAjm.js";import"./PopoverPopup-r-UXKcU9.js";import"./debounce-CxqcX0B2.js";import"./useOsdkClient-BinCW-Bh.js";import"./tick-C5OyQv1Y.js";import"./DropdownField-DPBhg9Lf.js";import"./isEqual-BqeFWCPf.js";import"./withOsdkMetrics-C9zKllhN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
