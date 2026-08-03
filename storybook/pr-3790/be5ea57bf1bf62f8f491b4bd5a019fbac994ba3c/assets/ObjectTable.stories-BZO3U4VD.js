import{j as i}from"./iframe-ByDFxc6J.js";import{O as p}from"./object-table-Cuy2ZZiP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DDDOLEZB.js";import"./preload-helper-DsAHu_tG.js";import"./Table-Dam2UJf8.js";import"./index-COrglkMl.js";import"./Dialog-B78Wpb89.js";import"./cross-w3hxXSvD.js";import"./svgIconContainer-Cdl4pzn_.js";import"./useBaseUiId-D3OL8vQs.js";import"./InternalBackdrop-Csd2HTI2.js";import"./composite-Cwm4Y6dc.js";import"./index-B9guDax2.js";import"./index-Bc4TUgst.js";import"./index-Cgx_EwSA.js";import"./useEventCallback-1qwqMCsR.js";import"./SkeletonBar-aM6Fy1o8.js";import"./LoadingCell-CrYPPVgs.js";import"./ColumnConfigDialog-CoBUhc6u.js";import"./DraggableList-BhHyN4LT.js";import"./search-DGeK7c1j.js";import"./Input-DDk9us9b.js";import"./useControlled-Ci-xyBbB.js";import"./isEqual-CEnEbtP1.js";import"./isObject-D2Dn4sIt.js";import"./Button-m3_edGWL.js";import"./ActionButton-D4kwrLk3.js";import"./Checkbox-DCKmoS6E.js";import"./useValueChanged-wikWbzp7.js";import"./CollapsiblePanel-BO8NnsX2.js";import"./MultiColumnSortDialog-CkcyfWVn.js";import"./MenuTrigger-CH6rfP9H.js";import"./CompositeItem-2RzmuieV.js";import"./ToolbarRootContext-BIWqFB3h.js";import"./getDisabledMountTransitionStyles-DaSobCt5.js";import"./getPseudoElementBounds-CsMIwoWo.js";import"./chevron-down-E23zrlQO.js";import"./index-BBAKdsvN.js";import"./error-C9F6tpCk.js";import"./BaseCbacBanner-bWH910W6.js";import"./makeExternalStore-E2xf1luR.js";import"./Tooltip-BMhKILjF.js";import"./PopoverPopup-BXbrjj3M.js";import"./toNumber-BrMdeazV.js";import"./useOsdkClient-JE9b6z1p.js";import"./tick-BvsSQam1.js";import"./DropdownField-B4APnnSf.js";import"./withOsdkMetrics-Du8BWQXf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
