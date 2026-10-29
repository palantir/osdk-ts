import{j as i}from"./iframe-Bl044qnf.js";import{O as p}from"./object-table-JJMjZish.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-4nKdeJg5.js";import"./preload-helper-C3nN8OhV.js";import"./Table-CkzyBY8f.js";import"./index-DUYD1b1T.js";import"./Dialog-BzLfCMxE.js";import"./cross-ByJxUK15.js";import"./svgIconContainer-DSPSIjCL.js";import"./useBaseUiId-D3Tkd5iy.js";import"./InternalBackdrop-DANcJBrc.js";import"./composite-BKeFyTtn.js";import"./index-BIw9TA11.js";import"./index-DOFCbist.js";import"./useEventCallback-B7Mw4f_q.js";import"./SkeletonBar-CV-952J8.js";import"./LoadingCell-DTjUTQFN.js";import"./ColumnConfigDialog-DaZ6T4n3.js";import"./DraggableList-CZvm2x-q.js";import"./search-DOyb79Ba.js";import"./Input-Dn6FdMxP.js";import"./useControlled-DWQwydBz.js";import"./Button-BeSccTOh.js";import"./small-cross-CtOoCFP2.js";import"./ActionButton-D2CjWZmo.js";import"./Checkbox-CvIBXNa-.js";import"./useValueChanged-C0GZ5aIg.js";import"./CollapsiblePanel-Drqn5TA4.js";import"./MultiColumnSortDialog-FkCgv7b1.js";import"./MenuTrigger-Dnxiprn0.js";import"./CompositeItem-CkPEHO5z.js";import"./ToolbarRootContext-Btm4cFoY.js";import"./getDisabledMountTransitionStyles-p_ATdOqC.js";import"./getPseudoElementBounds-Bmt56FKU.js";import"./chevron-down-DCr-eUT2.js";import"./index-DPpCb37f.js";import"./error-TWIHte5e.js";import"./BaseCbacBanner-CunkN0nl.js";import"./makeExternalStore-DPNkNH3X.js";import"./Tooltip-CVK2DOVB.js";import"./PopoverPopup-D3VJPyhs.js";import"./debounce-CjvDom3d.js";import"./useOsdkClient-Bq33Z6Hs.js";import"./tick-CyfQwmIO.js";import"./DropdownField-BEqOqzm_.js";import"./isEqual-CPfrUQ7O.js";import"./withOsdkMetrics-DEGSIMfx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
