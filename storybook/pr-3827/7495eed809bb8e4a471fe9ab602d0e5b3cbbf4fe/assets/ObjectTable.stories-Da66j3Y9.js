import{j as i}from"./iframe-_z3jDROO.js";import{O as p}from"./object-table-DgJqHMWn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BH5TBnE0.js";import"./preload-helper-Cp-TKz0z.js";import"./Table-BQ2ymhm1.js";import"./index-Q8EEyY0v.js";import"./Dialog-C2fl4M1v.js";import"./cross-D6Si-XhJ.js";import"./svgIconContainer-B7vtt4qG.js";import"./useBaseUiId-kiHD9n4O.js";import"./InternalBackdrop-CTq-483m.js";import"./composite-C0nd1t90.js";import"./index-DD50tvSO.js";import"./index-BunQhVyv.js";import"./index-Df7tufwq.js";import"./useEventCallback-B6QkgUyp.js";import"./SkeletonBar-CaokAZBs.js";import"./LoadingCell-Cac1cdLc.js";import"./ColumnConfigDialog-B6F30hN8.js";import"./DraggableList-DilBMzIC.js";import"./search-BaaSJoub.js";import"./Input-dTB1h5Gz.js";import"./useControlled-jrF362GW.js";import"./isEqual-Dys6_89E.js";import"./isObject-DECzZNaF.js";import"./Button-BM6D-CE6.js";import"./ActionButton-BFy74EOV.js";import"./Checkbox-Bw0S4q5H.js";import"./useValueChanged-CVJcad2L.js";import"./CollapsiblePanel-CCr6fiwE.js";import"./MultiColumnSortDialog-B7Gfn13C.js";import"./MenuTrigger-BCOBhzIQ.js";import"./CompositeItem-C1yClhJ6.js";import"./ToolbarRootContext-ClX35K5_.js";import"./getDisabledMountTransitionStyles-i99itILM.js";import"./getPseudoElementBounds-PgK5udBn.js";import"./chevron-down-DKrfrKEw.js";import"./index-B39ZDa_b.js";import"./error-CHbuT9qj.js";import"./BaseCbacBanner-w5DUGluQ.js";import"./makeExternalStore-Zu8KmZY0.js";import"./Tooltip-BZZ1ZjWO.js";import"./PopoverPopup-CN4czWCI.js";import"./toNumber-BsV4f3nC.js";import"./useOsdkClient-Di9178CQ.js";import"./tick-D1SNio7c.js";import"./DropdownField-DhaGXRA9.js";import"./withOsdkMetrics-BH6dSoSr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
