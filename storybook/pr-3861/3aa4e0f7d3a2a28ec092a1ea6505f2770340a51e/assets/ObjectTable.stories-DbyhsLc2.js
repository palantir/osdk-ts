import{j as i}from"./iframe-JhP61fmQ.js";import{O as p}from"./object-table-BJFagCC_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4M_GO92.js";import"./preload-helper-Dv4AHPyi.js";import"./Table-B7LI-gFh.js";import"./index-BSmeSe50.js";import"./Dialog-Cg45JvOL.js";import"./cross-Dsbhsz94.js";import"./svgIconContainer-DKp8J6V9.js";import"./useBaseUiId-CA99nDKM.js";import"./InternalBackdrop-C5yqQ4th.js";import"./composite-BB4dZRYR.js";import"./index-D3ENcNCA.js";import"./index-hdo2lGgd.js";import"./index-D7wU48Sj.js";import"./useEventCallback-DZNv6pry.js";import"./SkeletonBar-Dhm6G2dC.js";import"./LoadingCell-BGp_Bbyh.js";import"./ColumnConfigDialog-W0KM4Iuw.js";import"./DraggableList-BHKYfhCE.js";import"./search-CT7W-ise.js";import"./Input-CRfOnocM.js";import"./useControlled-CmxJ51VA.js";import"./Button-CndCZNKo.js";import"./small-cross-oBgym-zX.js";import"./ActionButton-qgx9p82l.js";import"./Checkbox-DPg92fgI.js";import"./useValueChanged-CkObsYLU.js";import"./CollapsiblePanel-AJl5CmxO.js";import"./MultiColumnSortDialog-CKF6fxNt.js";import"./MenuTrigger-8q4vQbZo.js";import"./CompositeItem-9QryHf4D.js";import"./ToolbarRootContext-D0sVvk8L.js";import"./getDisabledMountTransitionStyles-Ckk4q5Pv.js";import"./getPseudoElementBounds-B6I1n0Dl.js";import"./chevron-down-B0H-_dR_.js";import"./index-DkeojneP.js";import"./error-Cz6c6olR.js";import"./BaseCbacBanner-PkI4v1kZ.js";import"./makeExternalStore-CSQl7Sbm.js";import"./Tooltip-CmSYJPe_.js";import"./PopoverPopup-CA9gw9sj.js";import"./debounce-Bze7pKAd.js";import"./useOsdkClient-DvwuNmgk.js";import"./tick-CP7Ao593.js";import"./DropdownField-DhCekDmi.js";import"./isEqual-BookI4Nh.js";import"./withOsdkMetrics-BFR4d_uj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
