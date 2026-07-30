import{j as i}from"./iframe-Do-wqPAG.js";import{O as p}from"./object-table-UJDj7Pip.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BdSa46Ir.js";import"./preload-helper-DHrLiF_n.js";import"./Table-BZ642NUv.js";import"./index-Cy5rkzVX.js";import"./Dialog-CA5QjSY1.js";import"./cross-CvbnaeZH.js";import"./svgIconContainer-B89O08Vs.js";import"./useBaseUiId-Cgco29RD.js";import"./InternalBackdrop-DAEAk3PQ.js";import"./composite-CTJiCA6q.js";import"./index-DSZYY9yk.js";import"./index-Bs0rsg0r.js";import"./index-Dgbj4Zle.js";import"./useEventCallback-BCn0kh8o.js";import"./SkeletonBar-CgBocCWF.js";import"./LoadingCell-CH8O2fMl.js";import"./ColumnConfigDialog-DnldAJIK.js";import"./DraggableList-Jbf3dttK.js";import"./search-DfQ-5ttz.js";import"./Input-C7FUOEIR.js";import"./useControlled-BtQf2Mdn.js";import"./isEqual-Bx02XkV9.js";import"./isObject-56Ux56Kw.js";import"./Button-B4RKA1pV.js";import"./ActionButton-BP759aJc.js";import"./Checkbox-BwPxHa9w.js";import"./useValueChanged-BVaiV3kA.js";import"./CollapsiblePanel-DaFAODqE.js";import"./MultiColumnSortDialog-DJw8x3NY.js";import"./MenuTrigger-CjUQpjMe.js";import"./CompositeItem-BVuMRAPI.js";import"./ToolbarRootContext-DVSI0mCZ.js";import"./getDisabledMountTransitionStyles-BRGxIDFh.js";import"./getPseudoElementBounds-y3XhV5qP.js";import"./chevron-down-DEIKb6Ni.js";import"./index-DZMhpjfz.js";import"./error-B7QP6y9O.js";import"./BaseCbacBanner-BUyAOuoM.js";import"./makeExternalStore-1XgCgHrd.js";import"./Tooltip-JgW5ULFO.js";import"./PopoverPopup-CNKh6j6z.js";import"./toNumber-DD6BW-qV.js";import"./useOsdkClient-CURfGYsm.js";import"./tick-CxfWNdz3.js";import"./DropdownField-Bs1JY16h.js";import"./withOsdkMetrics-CZzkghnK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
