import{j as i}from"./iframe-DBsN32YB.js";import{O as p}from"./object-table-DjeIQPag.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DJ4nEZM_.js";import"./preload-helper-D8tz-Fbl.js";import"./Table-DPyHXa7-.js";import"./index-nhJVH1tz.js";import"./Dialog-DQ_Uwa09.js";import"./cross-DPk5SIsZ.js";import"./svgIconContainer-X_dBFOT2.js";import"./useBaseUiId-CSOklioX.js";import"./InternalBackdrop-DYY9GSmo.js";import"./composite-BNtgV9XE.js";import"./index-vWZxRhPY.js";import"./index-Cf_xmn3O.js";import"./index-BWmQuch2.js";import"./useEventCallback-BDGHapFp.js";import"./SkeletonBar-OO5fv2aQ.js";import"./LoadingCell-DY05omvW.js";import"./ColumnConfigDialog-DWZ3wkpR.js";import"./DraggableList-CjGeHf5D.js";import"./search-rD_BABVw.js";import"./Input-DkxwhWbl.js";import"./useControlled-BvDU6EbQ.js";import"./Button-CQwlNKu1.js";import"./small-cross-Cim7XK7q.js";import"./ActionButton-koQGMFye.js";import"./Checkbox-DCWuLRNR.js";import"./useValueChanged-NXrJU1s1.js";import"./CollapsiblePanel-U9o9y0a2.js";import"./MultiColumnSortDialog-Dqm-9n9T.js";import"./MenuTrigger-8jSKQYx3.js";import"./CompositeItem-Dfbl7Tdw.js";import"./ToolbarRootContext-6JBun5UY.js";import"./getDisabledMountTransitionStyles-OsqmWLyJ.js";import"./getPseudoElementBounds-Bc1_ckMu.js";import"./chevron-down-eJT7_Kub.js";import"./index-eEgfn-we.js";import"./error-C3JCbj1L.js";import"./BaseCbacBanner-CgR4_YV5.js";import"./makeExternalStore-DbaTP8FP.js";import"./Tooltip-BjuL9DjV.js";import"./PopoverPopup-0gvGwbx8.js";import"./debounce-DaYdPsaE.js";import"./useOsdkClient-0ECQxVY2.js";import"./tick-DsjN0rWO.js";import"./DropdownField-II4e2JLl.js";import"./isEqual-lRAD_Git.js";import"./withOsdkMetrics-1oll6lxC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
