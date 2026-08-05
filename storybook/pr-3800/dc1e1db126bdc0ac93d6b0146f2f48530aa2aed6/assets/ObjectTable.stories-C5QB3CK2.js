import{j as i}from"./iframe-Bq5j5aAZ.js";import{O as p}from"./object-table-ZojhhHH8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCos4ERw.js";import"./preload-helper-Cst-Jesr.js";import"./Table-CE6HqXij.js";import"./index-DWEhBHOg.js";import"./Dialog-BGHulRq-.js";import"./cross-CbyP9ICU.js";import"./svgIconContainer-D0zN2PvM.js";import"./useBaseUiId-BdQXYMbQ.js";import"./InternalBackdrop-uO_2LS-x.js";import"./composite-DrF_ejyf.js";import"./index-B_vCnOWE.js";import"./index-3GM7jxUo.js";import"./index-CjgMCQgf.js";import"./useEventCallback-CNtWd_Oy.js";import"./SkeletonBar-DRyfQFdJ.js";import"./LoadingCell-CJOAjMEt.js";import"./ColumnConfigDialog-OCSVdCgT.js";import"./DraggableList-CO-Jk5DR.js";import"./search-BjMKeiC8.js";import"./Input-BUcGQGwq.js";import"./useControlled-Bh97BPxb.js";import"./isEqual-C_CB3hcX.js";import"./isObject-CURaav_D.js";import"./Button-BDOsP3IO.js";import"./ActionButton-CWSaKj2F.js";import"./Checkbox-Dzs9FB__.js";import"./useValueChanged-ClV7qo_d.js";import"./CollapsiblePanel-zpIsHYl_.js";import"./MultiColumnSortDialog-DkloPuH0.js";import"./MenuTrigger-BzOQUDhL.js";import"./CompositeItem-D-DPXVET.js";import"./ToolbarRootContext-2btfoOPA.js";import"./getDisabledMountTransitionStyles-Ddgt0Mbu.js";import"./getPseudoElementBounds-DXUdX6lB.js";import"./chevron-down-Cyd20nPd.js";import"./index-XfaAXuD0.js";import"./error-BfeMGEzt.js";import"./BaseCbacBanner-CWdVryss.js";import"./makeExternalStore-DAAwZ8ri.js";import"./Tooltip-DDKYKaKZ.js";import"./PopoverPopup-Bli66F0P.js";import"./toNumber-BsCpXwUh.js";import"./useOsdkClient-Q-jj7O9w.js";import"./tick-CqpcZgXj.js";import"./DropdownField-Ct14Ku7e.js";import"./withOsdkMetrics-Dh460Fmw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
